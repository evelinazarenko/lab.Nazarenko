window.addEventListener('load', () => {
  const btn = document.createElement('button');
  btn.textContent = 'Chat with Support';
  btn.style.position = 'fixed';
  btn.style.right = '20px';
  btn.style.bottom = '20px';
  btn.style.padding = '10px';
  btn.style.zIndex = '9999';

  btn.onclick = () => {
    fetch('http://localhost:4000/api/support/messages')
      .then(res => res.json())
      .then(data => {
        alert("Support: " + data.messages[0]);
      })
      .catch(err => console.error(err));
  };

  document.body.appendChild(btn);
});
