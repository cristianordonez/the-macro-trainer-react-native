import { formatSeconds } from './formatSeconds';

describe('formatSeconds', () => {
   test('[0] should result in 00:00:00', () => {
      expect(formatSeconds(0)).toBe('00:00:00');
   });
   test('[35] should result in 00:00:00', () => {
      expect(formatSeconds(35)).toBe('00:00:35');
   });
   test('[65] should result in 00:01:05', () => {
      expect(formatSeconds(65)).toBe('00:01:05');
   });
   test('[359,999 or greater] should result in 99:59:59', () => {
      expect(formatSeconds(359999)).toBe('99:59:59');
   });
   test('[359,999 or greater] should result in 99:59:59', () => {
      expect(formatSeconds(4500000)).toBe('99:59:59');
   });
   test('[2109] should result in 00:35:09', () => {
      expect(formatSeconds(2109)).toBe('00:35:09');
   });
   test('[1123] should result in 00:18:43', () => {
      expect(formatSeconds(1123)).toBe('00:18:43');
   });
   test('[309] should result in 00:05:09', () => {
      expect(formatSeconds(309)).toBe('00:05:09');
   });

   test('[7209] should result in 02:00:09', () => {
      expect(formatSeconds(7209)).toBe('02:00:09');
   });
   test('[42479] should result in 11:47:59', () => {
      expect(formatSeconds(42479)).toBe('11:47:59');
   });
   test('[46799] should result in 12:59:59', () => {
      expect(formatSeconds(46799)).toBe('12:59:59');
   });
   test('[32949] should result in 09:09:09', () => {
      expect(formatSeconds(32949)).toBe('09:09:09');
   });
});
