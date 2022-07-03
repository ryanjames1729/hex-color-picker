import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'




const Color = () => {
  const router = useRouter()
  const { color_code } = router.query
  let bgcolor = '#' + color_code

  const handleSubmit = event => {
    event.preventDefault();

    const color_redirect = event.target.color_code.value;
    console.log(color_redirect)

    router.push('/' + color_redirect);
  }

  return (
    <>
    <div style={{ backgroundColor: bgcolor, height: '100vh', marginTop: -20, padding: 50 }}>
        <div className={styles.main}>
            <div className={styles.card}>
                <p>Color: {bgcolor}</p>
                <form
            onSubmit={handleSubmit}>
              <label htmlFor="color_code">Color Code</label>
              <textarea
                name="color_code"
                placeholder="FFFFFF"
                id="color_code"
                rows={1} 
              />
              <button
                type="submit"
              >Grab that color!</button>
            </form>
            </div>
        </div>
        
    </div>
    <div style={{ backgroundColor: bgcolor, height: '100vh'}}></div>
    </>
  )
}

export default Color