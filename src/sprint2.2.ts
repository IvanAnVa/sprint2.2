export const throttle = (fn: () => void, delay: number) => {
  let lastCheck = 0;
  let id = 0;
  return () => {
    const now = new Date().getTime();
    id ++;
    
    if(now - lastCheck < delay) return;

    lastCheck = now;
    mensaje(`El delay contiene ${id} clicks`);
    id = 0;
    fn();
  };
  
};
function mensaje(texto: string): void {
  const resultado = document.getElementById('resultado');
  if (resultado) {
      resultado.innerHTML = texto;
  }
}
document.querySelector('#click')?.addEventListener('click', throttle(() => console.log('click'), 2000));