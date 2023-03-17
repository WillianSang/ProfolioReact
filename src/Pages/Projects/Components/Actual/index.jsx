
import butonPlay from '/src/assets/Subtract.svg'
import style from './index.module.scss'

export default function ActualProject() {

  return (
    <section className={style.container}>
      <div className={style.overlayContain}>
        <h1 className={style.title}> Actual Project </h1>
        <div className={style.btnContainer}>
          <img  src={butonPlay} alt="" />
        </div>
        <p className={style.textSubtitle}> The best expeiencia the gestion de Foods </p>
        <p className={style.textReference}> Learn more </p>
      </div>
    </section>
  )

}