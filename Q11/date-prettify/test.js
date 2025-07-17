const formatDate = require('./index');

try {
  const result = formatDate(new Date('2025-07-17'));
  console.log('Formatted Date:', result);
} catch (err) {
  console.error(err.message);
}
