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

export async function isInstalled() {
  const relatedApps = await navigator.getInstalledRelatedApps();
  const app = relatedApps.filter(
    (app) => app.url === `${process.env.VUE_APP_BASE_URL}/manifest.json`
  );
  return !!app.length;
}
