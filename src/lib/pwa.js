export function isOnline() {
  return navigator.onLine;
}

export function isUsingApp() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone ||
    document.referrer.includes('android-app://')
  );
}

export function isDesktop() {
  return !/android|iphone|kindle|ipad/i.test(navigator.userAgent);
}
