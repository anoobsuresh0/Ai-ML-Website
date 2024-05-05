import React from 'react';

export const ModelViewer: React.FC = () => {
    const embedCode = `
    
    <div class="sketchfab-embed-wrapper"> <iframe title="Brain Point Cloud" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="600" height="400" src="https://sketchfab.com/models/c427ea0aee214141a78eba37bf9b76bb/embed?autospin=1&autostart=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1"> </iframe> </div>    `;

    return (
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
    );
};