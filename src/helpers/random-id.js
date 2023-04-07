export const randomId = () => {
  const validChar = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789';
  let randomId = '';

  for (let i = 0; i < 8; i++) {
    let random = Math.floor(Math.random() * validChar.length);
    randomId += validChar.charAt(random);
  };

  return randomId;
}
