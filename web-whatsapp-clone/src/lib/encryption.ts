import nacl from 'tweetnacl';
import naclUtil from 'tweetnacl-util';

// Generate a key pair for encryption (In real app, keys should be exchanged securely)
const keyPair = nacl.box.keyPair();

// Encode and decode helpers
const encodeUTF8 = naclUtil.encodeUTF8;
const decodeUTF8 = naclUtil.decodeUTF8;
const encodeBase64 = naclUtil.encodeBase64;
const decodeBase64 = naclUtil.decodeBase64;

// Encrypt a message with the public key of the recipient and secret key of sender
export function encryptMessage(message: string): string {
  const nonce = nacl.randomBytes(nacl.box.nonceLength);
  const messageUint8 = decodeUTF8(message);
  const encrypted = nacl.box(messageUint8, nonce, keyPair.publicKey, keyPair.secretKey);
  const fullMessage = new Uint8Array(nonce.length + encrypted.length);
  fullMessage.set(nonce);
  fullMessage.set(encrypted, nonce.length);
  return encodeBase64(fullMessage);
}

// Decrypt a message with the public key of the sender and secret key of recipient
export function decryptMessage(encryptedMessage: string): string {
  try {
    const messageWithNonce = decodeBase64(encryptedMessage);
    const nonce = messageWithNonce.slice(0, nacl.box.nonceLength);
    const message = messageWithNonce.slice(nacl.box.nonceLength, encryptedMessage.length);
    const decrypted = nacl.box.open(message, nonce, keyPair.publicKey, keyPair.secretKey);
    if (!decrypted) {
      return 'Decryption failed';
    }
    return encodeUTF8(decrypted);
  } catch (e) {
    return 'Decryption error';
  }
}
