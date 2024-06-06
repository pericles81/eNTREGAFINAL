import styles from './Styles/Footer.css'
const ajuda = ['Central de ajuda', 'Contate-nos', 'Política de privacidade', 'Termos', 'Suporte personalizado']
const nosEncontre = ['Instagram', 'Website', 'LinkedIn', 'Telegram', '(00) 00000-0000']
const compania = ['Sobre nós', 'Carreiras', 'Suporte', 'Preços', 'FAQ']
export default function Footer() {
  return (
    <footer className='divFooter'>
      <ul><strong>Taxa ai papai</strong>
        <li>® 2024</li>
      </ul>
      <ul><strong>Nos encontre</strong>
        {nosEncontre.map((e) => {
          return <li>{e}</li>
        })}
      </ul>
      <ul><strong>Compania</strong>
        {compania.map((e) => {
          return <li>{e}</li>
        })}
      </ul>
      <ul><strong>Ajuda</strong>
        {
          ajuda.map((e) => {
            return <li>{e}</li>
          })
        }
      </ul>
    </footer>

  )
}