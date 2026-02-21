function ipToInt32(ip) {
  let parts = ip.split('.');

  let n1 = Number(parts[0]);
  let n2 = Number(parts[1]);
  let n3 = Number(parts[2]);
  let n4 = Number(parts[3]);

  let result = (n1 << 24) | (n2 << 16) | (n3 << 8) | n4;

  return result >>> 0;;
}

console.log(ipToInt32("153.65.101.17"));