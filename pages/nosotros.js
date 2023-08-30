import Image from "next/image"
import Layout from "../components/layout"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
        title={"Nosotros"}
        description="Sobre nosotros, GuitarLA, Tienda de Música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>


            
            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra lobortis mauris non scelerisque. Donec et turpis velit. Vivamus tincidunt tincidunt dolor. Aliquam congue quis lacus eu cursus. Suspendisse sit amet pharetra augue. Cras non commodo massa, ut efficitur ligula. Sed consectetur quam leo, sed blandit elit mollis quis. Nullam non nunc tempus, condimentum metus tristique, iaculis sem. Pellentesque sollicitudin finibus feugiat.</p>

            <p>Cras tempus et ipsum ac imperdiet. Praesent sollicitudin arcu sit amet metus pharetra imperdiet. Cras imperdiet sollicitudin eros, eget cursus turpis ultricies vel. Donec ut nibh quis libero pellentesque maximus ut vitae massa. Fusce elementum leo non sapien imperdiet, quis dignissim elit imperdiet. Sed ullamcorper velit vitae tristique laoreet. Donec massa purus, lacinia a metus in, rutrum ultricies tortor. Aliquam tincidunt id dui ac pellentesque. Ut pellentesque massa mi, non dapibus lacus maximus non.</p>
            </div>
        </div>
      </main>
    </Layout>
  )
}
