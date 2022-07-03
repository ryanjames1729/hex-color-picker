import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'




const Color = () => {
  const router = useRouter()
  const { color_code } = router.query
  let bgcolor = '#' + color_code

  const handleSubmit = event => {
    event.preventDefault();

    let color_redirect = event.target.color_code.value;
    if(color_redirect.length > 0) {
        color_redirect = color_redirect.toUpperCase();
        console.log(color_redirect)

        router.push('/' + color_redirect);
    } else { router.push('/FFFFFF') }

  }

  return (
    <>
    <div style={{ backgroundColor: bgcolor, height: '100vh', marginTop: -20, padding: 50 }}>
        <div className={styles.main}>
            <div className={styles.card}>
                <p>Current Color: {bgcolor}</p>
                <div>
                    <h1>Type in a new color:</h1>
                    <form
                    onSubmit={handleSubmit}>
                    <label htmlFor="color_code"></label>
                    <textarea
                        name="color_code"
                        placeholder={color_code}
                        id="color_code"
                        rows={1} 
                        maxlength={6}
                        className={styles.textarea}
                    />
                    <button
                        type="submit"
                        className={styles.button}
                    >Grab that color!</button>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
    <div style={{ backgroundColor: bgcolor, height: '100vh'}}></div>
    </>
  )
}

export default Color