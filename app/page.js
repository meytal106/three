import Image from 'next/image'
import styles from './page.module.css'
 import '../app/style.css'
import * as THREE from 'three';
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); 
const cube = new THREE.Mesh(geometry, material); 
scene.add(cube); 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
function animate() {
  requestAnimationFrame(animate);


  renderer.render(scene, camera);
}

animate();
document.getElementById('createBallButton').addEventListener('click', () => {
  const ballGeometry = new THREE.SphereGeometry(0.5, 32, 32);
  const ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const ball = new THREE.Mesh(ballGeometry, ballMaterial);
  scene.add(ball);
});
document.getElementById('deleteBallButton').addEventListener('click', () => {
  if (balls.length > 0) {
    const ballToRemove = balls.pop(); // Get the last added ball
    scene.remove(ballToRemove); // Remove ball from the scene
  }
});





export default function Home() {
  return (
    <main className={styles.main}>
          <h1 className={styles.code}>helloooooooo</h1>

      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
    
      </div>



      <div className={styles.grid}>
   



       

       
      </div>
    </main>
  )
}
