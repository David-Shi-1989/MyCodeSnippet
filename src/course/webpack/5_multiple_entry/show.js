export default function show (content) {
  console.log('show:', content)
  document.getElementById('app').innerText = 'Hellow,' + content
}
