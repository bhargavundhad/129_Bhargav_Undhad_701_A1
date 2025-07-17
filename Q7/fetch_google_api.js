async function fetchGooglePage() {
  try {
    const response = await fetch('https://www.google.com');
    const status = await response.status;
    const html = await response.text();

    console.log('Status code', status);
    console.log('HTML content:',html)
  } catch (error) {
    console.error('Error fetching Google page:', error);
  }
}

fetchGooglePage();
