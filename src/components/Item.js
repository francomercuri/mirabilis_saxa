

export default function Item ({ item }) {
    return(
                  <div key={item.id}>
                        <img src = {item.pictureUrl} alt = 'imagen del producto' />
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                    </div>
    )}