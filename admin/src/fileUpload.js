import axios from 'axios';

const API = "http://165.227.217.5:3005/api";

const addUploadCapabilities = requestHandler => (type, resource, params) => {
    console.log(type, resource, params);
    
    if (type === 'CREATE' && resource === 'Comercios') {
        if (params.data.fotos) {
            const formData = new FormData();
            
            let newImageArray = [];

            params.data.fotos.forEach(function(file) {
                formData.append('files[]', file.rawFile);

                newImageArray.push({
                    nombre: API + '/containers/media/download/' + file.title,
                    title: API + '/containers/media/download/' + file.title,
                    src: API + '/containers/media/download/' + file.title
                });
            });

            params.data.fotos = newImageArray;
            
            // for (var key of formData.entries()) {
            //     console.log(key[0] + ', ' + key[1]);
            // }

            fetch(API + '/containers/media/upload', {
                method: 'post',
                body: formData,
            })
            .then(response => response.json())
            .then(r => {
                console.log(r)
            });

        }
    } else if (type === 'CREATE' && resource === 'promociones') {
        if (params.data.fotos) {
            const formData = new FormData();
            
            let newImageArray = [];

            params.data.fotos.forEach(function(file) {
                formData.append('files[]', file.rawFile);

                newImageArray.push({
                    nombre: API + '/containers/media/download/' + file.title,
                    title: API + '/containers/media/download/' + file.title,
                    src: API + '/containers/media/download/' + file.title
                });
            });

            params.data.fotos = newImageArray;
            
            // for (var key of formData.entries()) {
            //     console.log(key[0] + ', ' + key[1]);
            // }

            fetch(API + '/containers/media/upload', {
                method: 'post',
                body: formData,
            })
            .then(response => response.json())
            .then(r => {
                console.log(r)
            });

        }
    } else if (type === 'CREATE' && resource === 'Novedads') {
        if (params.data.fotos) {
            const formData = new FormData();
            
            let newImageArray = [];

            params.data.fotos.forEach(function(file) {
                formData.append('files[]', file.rawFile);

                newImageArray.push({
                    nombre: API + '/containers/media/download/' + file.title,
                    title: API + '/containers/media/download/' + file.title,
                    src: API + '/containers/media/download/' + file.title
                });
            });

            params.data.fotos = newImageArray;
            
            // for (var key of formData.entries()) {
            //     console.log(key[0] + ', ' + key[1]);
            // }

            fetch(API + '/containers/media/upload', {
                method: 'post',
                body: formData,
            })
            .then(response => response.json())
            .then(r => {
                console.log(r)
            });

        }
    }

    // if (type === 'UPDATE' && resource === 'posts') {
    //     if (params.data.pictures && params.data.pictures.length) {
    //         // only freshly dropped pictures are instance of File
    //         const formerPictures = params.data.pictures.filter(p => !(p instanceof File));
    //         const newPictures = params.data.pictures.filter(p => p instanceof File);

    //         return Promise.all(newPictures.map(convertFileToBase64))
    //             .then(base64Pictures => base64Pictures.map(picture64 => ({
    //                 src: picture64,
    //                 title: `${params.data.title}`,
    //             })))
    //             .then(transformedNewPictures => requestHandler(type, resource, {
    //                 ...params,
    //                 data: {
    //                     ...params.data,
    //                     pictures: [...transformedNewPictures, ...formerPictures],
    //                 },
    //             }));
    //     }
    // }

    return requestHandler(type, resource, params);
};

export default addUploadCapabilities;
