# Tripleten Penapaz Ltda

Penapaz Ltda es un proyecto final libre full stack del programa de desarrollo web de Tripleten.
Tiene dos partes backend y frontend. Ambas almacenadas en un servidor VM de google cloud.
Se han instalado en el servidor las dependencias de javascript necesarias el funcionamiento del frontend y backend

# FRONTEND

El frontend fue desarrollado con vite-project y tecnología react. Es una página web institucional que proporciona información general de la empresa. Con el objetivo de generar tráfico de clientes.
Cuenta con secciones que son importantes para llegar al público objetivo.
-Somos: Describe de manera general los productos que se comercializan
-Ubicaciones: Indica los puntos de venta en donde se pueden adquirir los productos. En esta parte se utilizaron iframes de google-maps.
-Productos: En esta parte se describen a más detalle los productos que se comercializan. Son tarjetas que describen un problema común relacionado a cada categoría. Cada tarjeta tiene un botón que despliega un popup con una lista de los productos pertnecientes a dicha categoría.  
-Botón fijo: Este botón es un enlace al número de whatsapp para facilitar la comunicación con el cliente. Este enlace está también fijo sobre la barra de navegación  
-Marcas: Es un slider diseñado con propiedades CSS.
-Footer: Tiene información adicional sobre la empresa y un link que lleva a un formulario.
-Formulario de registro: El objetivo de este formulario es incentivar al cliente a dejarnos sus datos, a cambio del 10% de descuento en su primera compra.

El frontend se inicializa, simplemente ingresando a la URL señalada más adelante. El archivo package JSON está configurado para que los cambios se suban automaticamente al servidor en google cloud.

# BACKEND

El backend es una api que almacena la información de los usuarios dejan en el formulario incluído en el frontend.
Fue desarrollado con express e incluye una base no relacional gestionada por moongose. Al igual que el frontend, el backend está alojado en google cloud.
Está gestionado por PM2 por lo que para inicializarlo se ejecuta el comando PM2 start index.js. Sin embargo, está configurado para que esté en permanente ejecución.
Las URLs cuentan con certificación https obtenida mediante el servicio gratuito de certbot.
Se utilizó nginx como servidor proxy para el backend y frontend

# ACCESO A LOS RECURSOS

# Frontend: https://penapaz.com/, penapaz.com

# Servidor: https://api.penapaz.com/
