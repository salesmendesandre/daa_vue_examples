export const subirImagen = (req, res) => {
    const publicUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`

    res.json({
        message: 'Imagen subida correctamente',
        //file: req.file,
        imageUrl: publicUrl
    })
}