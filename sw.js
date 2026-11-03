// HomeFit 오프라인 지원: 한 번 열었던 화면 파일(같은 주소의 html·js·css·아이콘)을 저장해 두고,
// 인터넷이 안 되면 저장된 것으로 열어 준다. 인터넷이 되면 항상 새 파일을 먼저 받는다(네트워크 우선).
// 저장소를 못 쓰는 브라우저(사생활 보호 창, 저장 공간 부족)에서도 화면은 평소처럼 열려야 한다.
const CACHE = 'homefit-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);
  // 다른 사이트 요청과 PC 서버 기능(/api/)은 그대로 보낸다.
  if (req.method !== 'GET' || url.origin !== self.location.origin || url.pathname.includes('/api/')) return;
  e.respondWith(
    (async () => {
      try {
        const res = await fetch(req);
        if (res.ok) {
          const copy = res.clone();
          e.waitUntil(caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {}));
        }
        return res;
      } catch (err) {
        const hit = await caches.match(req, { ignoreSearch: true }).catch(() => undefined);
        if (hit) return hit;
        throw err;
      }
    })(),
  );
});
