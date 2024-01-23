export function setCookie<T>(
  name: string,
  value: T,
  expireTime: number = 172_800
) {
  let expires = '';
  if (expireTime) {
    let date = new Date();
    date.setTime(date.getTime() + expireTime * 24 * 60);
    expires = '; expires=' + date.toUTCString();
  }

  document.cookie =
    name +
    '=' +
    (JSON.stringify(value) || '') +
    expires +
    '; SameSite=Strict: secure=true';
}

export function getCookie(name: string) {
  const regex = new RegExp(`(^| )${name}=([^;]+)`);
  const match = document.cookie.match(regex);
  if (match) {
    return match[2];
  }
}

export function removeCookie(name: string) {
  document.cookie =
    encodeURIComponent(name) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}
