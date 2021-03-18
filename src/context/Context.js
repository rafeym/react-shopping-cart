import React, { useState, createContext } from 'react'

export const DataContext = createContext()

export const DataProvider = (props) => {
  const state = {
    products: [
      {
        _id: '1',
        title: 'Nike Blazer Mid 77 Vintage',
        src:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoe-CBDjT0.jpg',
        description: "Men's Shoe",
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut consectetur odio. Quisque iaculis egestas porttitor. Phasellus mi dolor, congue a aliquet vel, blandit fringilla mauris. Curabitur venenatis velit ligula, nec vehicula mauris vehicula id. Morbi suscipit ante non augue volutpat, ac tincidunt risus malesuada',
        price: 135,
        colors: ['red', 'black', 'crimson', 'teal'],
        count: 1,
      },
      {
        _id: '2',
        title: 'Air Jordan 1 Low',
        src:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f4479d95-3a96-438d-ab38-f8c61d973e6f/air-jordan-1-low-shoe-v2kdOZ.jpg',
        description: "Men's Shoe",
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut consectetur odio. Quisque iaculis egestas porttitor. Phasellus mi dolor, congue a aliquet vel, blandit fringilla mauris. Curabitur venenatis velit ligula, nec vehicula mauris vehicula id. Morbi suscipit ante non augue volutpat, ac tincidunt risus malesuada',
        price: 120,
        colors: ['red', 'crimson', 'teal'],
        count: 1,
      },
      {
        _id: '3',
        title: 'Nike Air Max Plus',
        src:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bac02103-9daa-462c-8489-efa3c9df7fbc/air-max-plus-shoe-D900hR.jpg',
        description: "Men's Shoe",
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut consectetur odio. Quisque iaculis egestas porttitor. Phasellus mi dolor, congue a aliquet vel, blandit fringilla mauris. Curabitur venenatis velit ligula, nec vehicula mauris vehicula id. Morbi suscipit ante non augue volutpat, ac tincidunt risus malesuada',
        price: 225,
        colors: ['lightblue', 'white', 'crimson', 'teal'],
        count: 1,
      },
      {
        _id: '4',
        title: 'Nike Air Max Tailwind V SP',
        src:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b078a94e-925c-4900-a6ac-47a34c845cd4/air-max-tailwind-v-sp-shoe-jlcbQj.jpg',
        description: "Men's Shoe",
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut consectetur odio. Quisque iaculis egestas porttitor. Phasellus mi dolor, congue a aliquet vel, blandit fringilla mauris. Curabitur venenatis velit ligula, nec vehicula mauris vehicula id. Morbi suscipit ante non augue volutpat, ac tincidunt risus malesuada',
        price: 225,
        colors: ['orange', 'black', 'crimson', 'teal'],
        count: 1,
      },
      {
        _id: '5',
        title: 'Nike Air Force 1 Low',
        src:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1706ada4-559a-413d-b0e2-5e3519f21725/air-force-1-low-gore-tex-shoe-B9GptD.jpg',
        description: "Men's Shoe",
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut consectetur odio. Quisque iaculis egestas porttitor. Phasellus mi dolor, congue a aliquet vel, blandit fringilla mauris. Curabitur venenatis velit ligula, nec vehicula mauris vehicula id. Morbi suscipit ante non augue volutpat, ac tincidunt risus malesuada',
        price: 190,
        colors: ['orange', 'black', 'crimson', 'teal'],
        count: 1,
      },
      {
        _id: '6',
        title: 'Nike Air Zoom Terra Kiger 7',
        src:
          'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2a0b31a0-5181-4648-8fd2-988015ef1713/air-zoom-terra-kiger-7-trail-running-shoe-PFRMNz.jpg',
        description: "Men's Shoe",
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut consectetur odio. Quisque iaculis egestas porttitor. Phasellus mi dolor, congue a aliquet vel, blandit fringilla mauris. Curabitur venenatis velit ligula, nec vehicula mauris vehicula id. Morbi suscipit ante non augue volutpat, ac tincidunt risus malesuada',
        price: 180,
        colors: ['orange', 'black', 'crimson', 'teal'],
        count: 1,
      },
    ],
  }
  const [items, setItems] = useState(state)
  const { products } = items

  return (
    <DataContext.Provider value={{ products }}>
      {props.children}
    </DataContext.Provider>
  )
}
