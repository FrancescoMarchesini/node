import * as THREE from 'three';

function main() {
  //faccio la query per accedere al canvas dove disegnare
  const canvas = document.querySelector('#c');
  //oggetto render che si prende carico di disegnare l'oggetto 3D 
  const renderer = new THREE.WebGLRenderer({canvas});

  /**
   * Parametri di settaggio della telecamera
   */
  const fov = 75; //Field Of View
  const aspect = 2; // the canvas default 300x150 pixel = 2
  const near = 0.1; //range min
  const far = 5;    //range max
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;


  /**
   * radice del grafo tutto quello che dev'essere diseganto viene fatto qui
   */
  const scene = new THREE.Scene();

  /**
   * un semplice box
   */
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  /**
   * La texture
   */
  const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue

  /**
   * Applico la geometria e la texture per creare la Mesh
   */
  const cube = new THREE.Mesh(geometry, material);

  /**
   * Aggiungo il cubo alla scena
   */
  scene.add(cube);

  /**
   * Faccio il render della scena e della camera
   */
  renderer.render(scene, camera);
}

main();
