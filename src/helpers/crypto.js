import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

const defaultPhrase = 'P4ssphr4s3s1w';

export const encrypt = (text, phrase = defaultPhrase) => {
  return AES.encrypt(text, phrase).toString();
};

export const decrypt = (ciphertext, phrase = defaultPhrase) => {
  const bytes = AES.decrypt(ciphertext, phrase);
  const originalText = bytes.toString(Utf8);
  return originalText;
};
