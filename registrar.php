<?php

$nombre = isset($_POST['nom']) ? $_POST['nom'] : '';
$apellidos = isset($_POST['apel']) ? $_POST['apel'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$celular = isset($_POST['cel']) ? $_POST['cel'] : '';
$direccion = isset($_POST['dir']) ? $_POST['dir'] : '';
$ciudad = isset($_POST['ciudad']) ? $_POST['ciudad'] : '';
$mensaje = isset($_POST['mensaje']) ? $_POST['mensaje'] : '';

try {

    $conexion = new PDO("mysql:host=localhost;port=3306;dbname=pagina_db", "root", "");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $pdo = $conexion->prepare('INSERT INTO clientes(nombre, apellidos, email, celular, direccion, ciudad, mensaje) VALUES(?, ?, ?, ?, ?, ?, ? )');
    $pdo->bindParam(1, $nombre);
    $pdo->bindParam(2, $apellidos);
    $pdo->bindParam(3, $email);
    $pdo->bindParam(4, $celular);
    $pdo->bindParam(5, $direccion);
    $pdo->bindParam(6, $ciudad);
    $pdo->bindParam(7, $mensaje);
    $pdo->execute() or die(print($pdo->errorInfo()));

    echo json_encode('true');

} catch(PDOException $error) {
    echo $error->getMessage();
    die();
}