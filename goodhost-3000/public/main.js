document.cookie = 'SessionID=123456; path=/';

fetch('/api/emails')
  .then(res => res.json())
  .then(emails => {
    const list = document.getElementById('email-list');
    const title = document.querySelector('#email-content h2');
    const body = document.getElementById('email-body');

    emails.forEach(email => {
      const item = document.createElement('div');
      item.textContent = `${email.sender} — ${email.subject}`;
      item.style.cursor = 'pointer';

      item.onclick = () => {
        title.textContent = email.subject;
        body.textContent = email.body;
      };

      list.appendChild(item);
    });
  });
