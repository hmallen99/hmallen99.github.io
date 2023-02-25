import * as React from "react"
import { useParams } from "react-router-dom";
import './Blog.css'

export default function BlogContent() {
    const {id} = useParams();
    console.log(id)

    return (
        <div className="blog-content">
            <div className="blog-header">
                <div className="blog-title">Title</div>
                <div className="blog-subtitle">SubTitle</div>
            </div>
            <div className="blog-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Praesent placerat metus augue, non bibendum
                quam finibus eget. Maecenas lacinia metus in metus
                pretium, congue malesuada augue rhoncus. Praesent
                malesuada nunc vitae lectus rhoncus lobortis. Aenean
                dignissim posuere ex sed facilisis. Nunc sed
                lobortis enim, ac cursus nulla. Praesent pretium
                urna id dui sollicitudin vehicula. Fusce at placerat
                mi. Morbi metus ex, feugiat at dolor et, feugiat
                fermentum mauris. In pellentesque mauris sed rhoncus
                luctus. Fusce sit amet luctus est, ac ultricies
                erat. Ut dignissim non massa interdum sollicitudin.
                Phasellus condimentum est a est accumsan, eu sodales
                felis vehicula. Praesent feugiat neque velit, id
                euismod massa consequat et. Sed dolor massa,
                ultricies sit amet egestas vitae, convallis ut
                lectus. Phasellus augue metus, fringilla vitae
                laoreet vitae, congue sit amet sapien. Morbi id diam
                purus.

                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Praesent placerat metus augue, non bibendum
                quam finibus eget. Maecenas lacinia metus in metus
                pretium, congue malesuada augue rhoncus. Praesent
                malesuada nunc vitae lectus rhoncus lobortis. Aenean
                dignissim posuere ex sed facilisis. Nunc sed
                lobortis enim, ac cursus nulla. Praesent pretium
                urna id dui sollicitudin vehicula. Fusce at placerat
                mi. Morbi metus ex, feugiat at dolor et, feugiat
                fermentum mauris. In pellentesque mauris sed rhoncus
                luctus. Fusce sit amet luctus est, ac ultricies
                erat. Ut dignissim non massa interdum sollicitudin.
                Phasellus condimentum est a est accumsan, eu sodales
                felis vehicula. Praesent feugiat neque velit, id
                euismod massa consequat et. Sed dolor massa,
                ultricies sit amet egestas vitae, convallis ut
                lectus. Phasellus augue metus, fringilla vitae
                laoreet vitae, congue sit amet sapien. Morbi id diam
                purus.

                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Praesent placerat metus augue, non bibendum
                quam finibus eget. Maecenas lacinia metus in metus
                pretium, congue malesuada augue rhoncus. Praesent
                malesuada nunc vitae lectus rhoncus lobortis. Aenean
                dignissim posuere ex sed facilisis. Nunc sed
                lobortis enim, ac cursus nulla. Praesent pretium
                urna id dui sollicitudin vehicula. Fusce at placerat
                mi. Morbi metus ex, feugiat at dolor et, feugiat
                fermentum mauris. In pellentesque mauris sed rhoncus
                luctus. Fusce sit amet luctus est, ac ultricies
                erat. Ut dignissim non massa interdum sollicitudin.
                Phasellus condimentum est a est accumsan, eu sodales
                felis vehicula. Praesent feugiat neque velit, id
                euismod massa consequat et. Sed dolor massa,
                ultricies sit amet egestas vitae, convallis ut
                lectus. Phasellus augue metus, fringilla vitae
                laoreet vitae, congue sit amet sapien. Morbi id diam
                purus.

                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Praesent placerat metus augue, non bibendum
                quam finibus eget. Maecenas lacinia metus in metus
                pretium, congue malesuada augue rhoncus. Praesent
                malesuada nunc vitae lectus rhoncus lobortis. Aenean
                dignissim posuere ex sed facilisis. Nunc sed
                lobortis enim, ac cursus nulla. Praesent pretium
                urna id dui sollicitudin vehicula. Fusce at placerat
                mi. Morbi metus ex, feugiat at dolor et, feugiat
                fermentum mauris. In pellentesque mauris sed rhoncus
                luctus. Fusce sit amet luctus est, ac ultricies
                erat. Ut dignissim non massa interdum sollicitudin.
                Phasellus condimentum est a est accumsan, eu sodales
                felis vehicula. Praesent feugiat neque velit, id
                euismod massa consequat et. Sed dolor massa,
                ultricies sit amet egestas vitae, convallis ut
                lectus. Phasellus augue metus, fringilla vitae
                laoreet vitae, congue sit amet sapien. Morbi id diam
                purus.

                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Praesent placerat metus augue, non bibendum
                quam finibus eget. Maecenas lacinia metus in metus
                pretium, congue malesuada augue rhoncus. Praesent
                malesuada nunc vitae lectus rhoncus lobortis. Aenean
                dignissim posuere ex sed facilisis. Nunc sed
                lobortis enim, ac cursus nulla. Praesent pretium
                urna id dui sollicitudin vehicula. Fusce at placerat
                mi. Morbi metus ex, feugiat at dolor et, feugiat
                fermentum mauris. In pellentesque mauris sed rhoncus
                luctus. Fusce sit amet luctus est, ac ultricies
                erat. Ut dignissim non massa interdum sollicitudin.
                Phasellus condimentum est a est accumsan, eu sodales
                felis vehicula. Praesent feugiat neque velit, id
                euismod massa consequat et. Sed dolor massa,
                ultricies sit amet egestas vitae, convallis ut
                lectus. Phasellus augue metus, fringilla vitae
                laoreet vitae, congue sit amet sapien. Morbi id diam
                purus.
            </div>
        </div>
    )
}