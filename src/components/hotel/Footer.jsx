import ini from './footer.module.css'

function Footer(){
    return(
        <>
            <footer className={ini.footer}>
                <div className={ini.foot}>
                    <h3>Lorem ipsum dolor sit.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente laudantium consequatur assumenda exercitationem ipsa debitis sequi mollitia accusantium nisi?</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div className={ini.foot}>
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi excepturi perspiciatis libero, nemo pariatur repellendus?</p>
                </div>
                <div className={ini.foot}>
                    <h3>Lorem ipsum dolor sit.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi excepturi perspiciatis libero, nemo pariatur repellendus?</p>
                    <div className={ini.redes}>
                        <i className='bx bxl-whatsapp'></i>
                        <i className='bx bxl-facebook'></i>
                        <i className='bx bxl-tiktok'></i>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;