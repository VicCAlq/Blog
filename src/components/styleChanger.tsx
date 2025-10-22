export function StyleChanger(props: {asset: string}): React.ReactElement {
  const asset = props.asset;
  function setStyle() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `src/styles/${asset}`
    document.head.appendChild(link);
  }

  return(
    <button onClick={setStyle}>Set {asset} as style</button>
  )
}
