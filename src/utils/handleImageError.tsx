// Función para manejar el error de carga de la imagen
export const handleImageError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  DEFAULT_IMAGE_URL: string
) => {
  event.currentTarget.src = DEFAULT_IMAGE_URL;
};
