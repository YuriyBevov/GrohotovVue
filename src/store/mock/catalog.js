const catalogMockData = [
    {
        id: '1',
        article: 'G2H1065',
        img: 'product-item_1-big.png',
        title: 'BXC',
        desc: 'Вытяжное устройство для механической системы вентиляции',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 6848,
        priceTo: 56584,
        price: 12644,
        isWatched: false,
    },

    {
        id: '2',
        article: 'G2H1065',
        img: 'product-item_2-big.png',
        title: 'G2H',
        desc: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 26848,
        priceTo: 1326584,
        price: 18644,
        isWatched: true,
    },

    {
        id: '3',
        article: 'G2H1065',
        img: 'product-item_3-big.png',
        title: 'GHN',
        desc: 'Вытяжное устройство с датчиком присутствия',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 2848,
        priceTo: 36584,
        price: 22644,
        isWatched: true,
    },

    {
        id: '4',
        article: 'G2H1065',
        img: 'product-item_4-big.png',
        title: 'TDA',
        desc: 'Вытяжное устройство с датчиком присутствия',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 6848,
        priceTo: 66584,
        price: 32644,
        isWatched: true,
    },
    {
        id: '5',
        article: 'G2H1065',
        img: 'product-item_1-big.png',
        title: 'BXC',
        desc: 'Вытяжное устройство для механической системы вентиляции',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 6848,
        priceTo: 56584,
        price: 1644,
        isWatched: false,
    },

    {
        id: '6',
        article: 'G2H1065',
        img: 'product-item_2-big.png',
        title: 'G2H',
        desc: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 6848,
        priceTo: 56584,
        price: 9644,
        isWatched: true,
    },

    {
        id: '7',
        article: 'G2H1065',
        img: 'product-item_3-big.png',
        title: 'GHN',
        desc: 'Вытяжное устройство с датчиком присутствия',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 6848,
        priceTo: 56584,
        price: 22644,
        isWatched: false,
    },

    {
        id: '8',
        article: 'G2H1065',
        img: 'product-item_4-big.png',
        title: 'TDA',
        desc: 'Вытяжное устройство с датчиком присутствия',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 6848,
        priceTo: 56584,
        price: 42644,
        isWatched: false,
    },
    {
        id: '9',
        article: 'G2H1065',
        img: 'product-item_1-big.png',
        title: 'BXC',
        desc: 'Вытяжное устройство для механической системы вентиляции',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 6848,
        priceTo: 56584,
        price: 6544,
        isWatched: true,
    },

    {
        id: '10',
        article: 'G2H1065',
        img: 'product-item_2-big.png',
        title: 'G2H',
        desc: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 6848,
        priceTo: 56584,
        price: 3644,
        isWatched: true,
    },

    {
        id: '12',
        article: 'G2H1065',
        img: 'product-item_3-big.png',
        title: 'GHN',
        desc: 'Вытяжное устройство с датчиком присутствия',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 6848,
        priceTo: 56584,
        price: 12544,
        isWatched: false,
    },

    {
        id: '13',
        article: 'G2H1065',
        img: 'product-item_4-big.png',
        title: 'TDA',
        desc: 'Вытяжное устройство с датчиком присутствия',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 6848,
        priceTo: 56584,
        price: 12644,
        isWatched: false,
    },
    {
        id: '14',
        article: 'G2H1065',
        img: 'product-item_1-big.png',
        title: 'BXC',
        desc: 'Вытяжное устройство для механической системы вентиляции',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 6848,
        priceTo: 56584,
        price: 12344,
        isWatched: false,
    },

    {
        id: '15',
        article: 'G2H1065',
        img: 'product-item_2-big.png',
        title: 'G2H',
        desc: 'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 6848,
        priceTo: 56584,
        price: 11644,
        isWatched: true,
    },

    {
        id: '16',
        article: 'G2H1065',
        img: 'product-item_3-big.png',
        title: 'GHN',
        desc: 'Вытяжное устройство с датчиком присутствия',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 6848,
        priceTo: 56584,
        price: 17644,
        isWatched: false,
    },

    {
        id: '17',
        article: 'G2H1065',
        img: 'product-item_4-big.png',
        title: 'TDA',
        desc: 'Вытяжное устройство с датчиком присутствия',
        chars: [
            '12-72/168 м3/ч',
            'гидрорегулируемый расход',
            'от датчика присутствия'
        ],
        priceFrom: 6848,
        priceTo: 56584,
        price: 1244,
        isWatched: true,
    },
]

export {catalogMockData}