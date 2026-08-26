/**
 * vetPerto - Base de Dados de Estabelecimentos (Fortaleza - CE)
 * 100 estabelecimentos completos com dados de contato, serviços, produtos, preços e avaliações.
 */
window.PLACES_DATA = [
  {
    "id": "1",
    "name": "Clínica Bicho Feliz",
    "category": "Veterinária",
    "neighborhood": "Aldeota",
    "address": "Av. Santos Dumont, 100 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3200-1000",
    "whatsapp": "(85) 98000-1000",
    "rating": "4,5",
    "reviewsCount": 28,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "350 m",
    "time": "🚶 4 min",
    "badge": "Aberto agora",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.7404,
      "lng": -38.4998
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Clínica Bicho Feliz é referência em cuidados de saúde animal no bairro Aldeota. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "2",
    "name": "Pet Vida",
    "category": "Petshop",
    "neighborhood": "Aldeota",
    "address": "Av. Dom Luís, 173 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3219-1037",
    "whatsapp": "(85) 98043-1037",
    "rating": "4,6",
    "reviewsCount": 45,
    "services": "Petshop • Rações • Acessórios",
    "distance": "750 m",
    "time": "🚶 9 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.74414,
      "lng": -38.49929
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet Vida oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "3",
    "name": "AuMiau Banho & Tosa",
    "category": "Banho",
    "neighborhood": "Aldeota",
    "address": "Rua Leonardo Mota, 246 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3238-1074",
    "whatsapp": "(85) 98086-1074",
    "rating": "4,7",
    "reviewsCount": 62,
    "services": "Banho • Tosa • Hidratação",
    "distance": "550 m",
    "time": "🚶 7 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.73365,
      "lng": -38.49985
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O AuMiau Banho & Tosa é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "4",
    "name": "VetCare 24 horas",
    "category": "Veterinária",
    "neighborhood": "Aldeota",
    "address": "Rua Barbosa de Freitas, 319 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3257-1111",
    "whatsapp": "(85) 98129-1111",
    "rating": "4,8",
    "reviewsCount": 79,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "300 m",
    "time": "🚶 4 min",
    "badge": "Aberto 24h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.73569,
      "lng": -38.5011
    },
    "openingHours": {
      "status": "Plantão 24 horas",
      "badge": "Aberto 24h",
      "weekdays": "Aberto 24 horas (todos os dias)",
      "saturday": "Aberto 24 horas",
      "sunday": "Aberto 24 horas"
    },
    "about": "A VetCare 24 horas é referência em cuidados de saúde animal no bairro Aldeota. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "5",
    "name": "AuMiau Petshop",
    "category": "Petshop",
    "neighborhood": "Aldeota",
    "address": "Rua Maria Tomásia, 392 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3276-1148",
    "whatsapp": "(85) 98172-1148",
    "rating": "4,9",
    "reviewsCount": 96,
    "services": "Petshop • Rações • Acessórios",
    "distance": "350 m",
    "time": "🚶 4 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.74093,
      "lng": -38.50255
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O AuMiau Petshop oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "6",
    "name": "Groomer Pet Spa",
    "category": "Banho",
    "neighborhood": "Aldeota",
    "address": "Av. Santos Dumont, 465 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3295-1185",
    "whatsapp": "(85) 98215-1185",
    "rating": "5,0",
    "reviewsCount": 113,
    "services": "Banho • Tosa • Hidratação",
    "distance": "250 m",
    "time": "🚶 3 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.73683,
      "lng": -38.50365
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Groomer Pet Spa é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "7",
    "name": "Hospital Veterinário São Francisco",
    "category": "Veterinária",
    "neighborhood": "Aldeota",
    "address": "Av. Dom Luís, 538 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3314-1222",
    "whatsapp": "(85) 98258-1222",
    "rating": "4,5",
    "reviewsCount": 130,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "250 m",
    "time": "🚶 3 min",
    "badge": "Aberto 24h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.73702,
      "lng": -38.50391
    },
    "openingHours": {
      "status": "Plantão 24 horas",
      "badge": "Aberto 24h",
      "weekdays": "Aberto 24 horas (todos os dias)",
      "saturday": "Aberto 24 horas",
      "sunday": "Aberto 24 horas"
    },
    "about": "A Hospital Veterinário São Francisco é referência em cuidados de saúde animal no bairro Aldeota. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "8",
    "name": "Mundo Animal Fortaleza",
    "category": "Petshop",
    "neighborhood": "Aldeota",
    "address": "Rua Leonardo Mota, 611 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3333-1259",
    "whatsapp": "(85) 98301-1259",
    "rating": "4,6",
    "reviewsCount": 147,
    "services": "Petshop • Rações • Acessórios",
    "distance": "1,1 km",
    "time": "🚗 4 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.74349,
      "lng": -38.51074
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Mundo Animal Fortaleza oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "9",
    "name": "Alpha Pet Banho e Tosa",
    "category": "Banho",
    "neighborhood": "Aldeota",
    "address": "Rua Barbosa de Freitas, 684 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3352-1296",
    "whatsapp": "(85) 98344-1296",
    "rating": "4,7",
    "reviewsCount": 164,
    "services": "Banho • Tosa • Hidratação",
    "distance": "850 m",
    "time": "🚶 11 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.73415,
      "lng": -38.5087
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Alpha Pet Banho e Tosa é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "10",
    "name": "Dra. Patinhas Clínica",
    "category": "Veterinária",
    "neighborhood": "Aldeota",
    "address": "Rua Maria Tomásia, 757 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3371-1333",
    "whatsapp": "(85) 98387-1333",
    "rating": "4,8",
    "reviewsCount": 181,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "750 m",
    "time": "🚶 9 min",
    "badge": "Aberto até 19h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.73244,
      "lng": -38.50569
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Dra. Patinhas Clínica é referência em cuidados de saúde animal no bairro Aldeota. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "11",
    "name": "Bicho Mimado Petshop",
    "category": "Petshop",
    "neighborhood": "Aldeota",
    "address": "Av. Santos Dumont, 830 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3390-1370",
    "whatsapp": "(85) 98430-1370",
    "rating": "4,9",
    "reviewsCount": 198,
    "services": "Petshop • Rações • Acessórios",
    "distance": "850 m",
    "time": "🚶 11 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.74583,
      "lng": -38.50212
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Bicho Mimado Petshop oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "12",
    "name": "Espaço Glamour Pet",
    "category": "Banho",
    "neighborhood": "Aldeota",
    "address": "Av. Dom Luís, 903 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3409-1407",
    "whatsapp": "(85) 98473-1407",
    "rating": "5,0",
    "reviewsCount": 215,
    "services": "Banho • Tosa • Hidratação",
    "distance": "400 m",
    "time": "🚶 5 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.73757,
      "lng": -38.49852
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Espaço Glamour Pet é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "13",
    "name": "SOS Animal 24h",
    "category": "Veterinária",
    "neighborhood": "Aldeota",
    "address": "Rua Leonardo Mota, 976 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3428-1444",
    "whatsapp": "(85) 98516-1444",
    "rating": "4,5",
    "reviewsCount": 42,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "850 m",
    "time": "🚶 11 min",
    "badge": "Aberto 24h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.734,
      "lng": -38.49544
    },
    "openingHours": {
      "status": "Plantão 24 horas",
      "badge": "Aberto 24h",
      "weekdays": "Aberto 24 horas (todos os dias)",
      "saturday": "Aberto 24 horas",
      "sunday": "Aberto 24 horas"
    },
    "about": "A SOS Animal 24h é referência em cuidados de saúde animal no bairro Aldeota. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "14",
    "name": "Pet Shop do Parque",
    "category": "Petshop",
    "neighborhood": "Aldeota",
    "address": "Rua Barbosa de Freitas, 1049 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3447-1481",
    "whatsapp": "(85) 98559-1481",
    "rating": "4,6",
    "reviewsCount": 59,
    "services": "Petshop • Rações • Acessórios",
    "distance": "1,1 km",
    "time": "🚗 4 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.74195,
      "lng": -38.49329
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet Shop do Parque oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "15",
    "name": "Banho & Cheiroso Estética Canina",
    "category": "Banho",
    "neighborhood": "Aldeota",
    "address": "Rua Maria Tomásia, 1122 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3466-1518",
    "whatsapp": "(85) 98602-1518",
    "rating": "4,7",
    "reviewsCount": 76,
    "services": "Banho • Tosa • Hidratação",
    "distance": "400 m",
    "time": "🚶 5 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.73507,
      "lng": -38.50002
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Banho & Cheiroso Estética Canina é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "16",
    "name": "Clínica Pet Saúde",
    "category": "Veterinária",
    "neighborhood": "Aldeota",
    "address": "Av. Santos Dumont, 1195 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3485-1555",
    "whatsapp": "(85) 98645-1555",
    "rating": "4,8",
    "reviewsCount": 93,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "300 m",
    "time": "🚶 4 min",
    "badge": "Aberto até 19h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.73572,
      "lng": -38.50019
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Clínica Pet Saúde é referência em cuidados de saúde animal no bairro Aldeota. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "17",
    "name": "Cão & Gato Boutique",
    "category": "Petshop",
    "neighborhood": "Aldeota",
    "address": "Av. Dom Luís, 1268 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3504-1592",
    "whatsapp": "(85) 98688-1592",
    "rating": "4,9",
    "reviewsCount": 110,
    "services": "Petshop • Rações • Acessórios",
    "distance": "650 m",
    "time": "🚶 8 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.74385,
      "lng": -38.50122
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Cão & Gato Boutique oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "18",
    "name": "Studio Pet Tosa & Spa",
    "category": "Banho",
    "neighborhood": "Aldeota",
    "address": "Rua Leonardo Mota, 1341 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3523-1629",
    "whatsapp": "(85) 98731-1629",
    "rating": "5,0",
    "reviewsCount": 127,
    "services": "Banho • Tosa • Hidratação",
    "distance": "250 m",
    "time": "🚶 3 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.73859,
      "lng": -38.50266
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Studio Pet Tosa & Spa é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "19",
    "name": "Centro Veterinário Fortaleza",
    "category": "Veterinária",
    "neighborhood": "Aldeota",
    "address": "Rua Barbosa de Freitas, 1414 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3542-1666",
    "whatsapp": "(85) 98774-1666",
    "rating": "4,5",
    "reviewsCount": 144,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "750 m",
    "time": "🚶 9 min",
    "badge": "Aberto agora",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.73163,
      "lng": -38.50396
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Centro Veterinário Fortaleza é referência em cuidados de saúde animal no bairro Aldeota. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "20",
    "name": "Espaço Pet Fortaleza",
    "category": "Petshop",
    "neighborhood": "Aldeota",
    "address": "Rua Maria Tomásia, 1487 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3561-1703",
    "whatsapp": "(85) 98817-1703",
    "rating": "4,6",
    "reviewsCount": 161,
    "services": "Petshop • Rações • Acessórios",
    "distance": "350 m",
    "time": "🚶 4 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.73956,
      "lng": -38.50459
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Espaço Pet Fortaleza oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "21",
    "name": "Tosa & Arte Grooming",
    "category": "Banho",
    "neighborhood": "Aldeota",
    "address": "Av. Santos Dumont, 1560 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3580-1740",
    "whatsapp": "(85) 98860-1740",
    "rating": "4,7",
    "reviewsCount": 178,
    "services": "Banho • Tosa • Hidratação",
    "distance": "500 m",
    "time": "🚶 6 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.74209,
      "lng": -38.50419
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Tosa & Arte Grooming é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "22",
    "name": "Vet Prime Especialidades",
    "category": "Veterinária",
    "neighborhood": "Aldeota",
    "address": "Av. Dom Luís, 1633 - Aldeota, Fortaleza - CE",
    "phone": "(85) 3599-1777",
    "whatsapp": "(85) 98903-1777",
    "rating": "4,8",
    "reviewsCount": 195,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "1,0 km",
    "time": "🚗 4 min",
    "badge": "Aberto até 19h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.73376,
      "lng": -38.51031
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Vet Prime Especialidades é referência em cuidados de saúde animal no bairro Aldeota. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "23",
    "name": "Planeta Pet Acessórios",
    "category": "Petshop",
    "neighborhood": "Meireles",
    "address": "Rua Ana Bilhar, 1706 - Meireles, Fortaleza - CE",
    "phone": "(85) 3618-1814",
    "whatsapp": "(85) 98946-1814",
    "rating": "4,9",
    "reviewsCount": 212,
    "services": "Petshop • Rações • Acessórios",
    "distance": "900 m",
    "time": "🚶 11 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.73011,
      "lng": -38.50364
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Planeta Pet Acessórios oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "24",
    "name": "Banho Feliz Estética Animal",
    "category": "Banho",
    "neighborhood": "Meireles",
    "address": "Rua Canuto de Aguiar, 1779 - Meireles, Fortaleza - CE",
    "phone": "(85) 3637-1851",
    "whatsapp": "(85) 98989-1851",
    "rating": "5,0",
    "reviewsCount": 39,
    "services": "Banho • Tosa • Hidratação",
    "distance": "1,1 km",
    "time": "🚗 4 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.72851,
      "lng": -38.50023
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Banho Feliz Estética Animal é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "25",
    "name": "Clínica Vet & Vida",
    "category": "Veterinária",
    "neighborhood": "Meireles",
    "address": "Rua Pereira Valente, 1852 - Meireles, Fortaleza - CE",
    "phone": "(85) 3656-1888",
    "whatsapp": "(85) 99032-1888",
    "rating": "4,5",
    "reviewsCount": 56,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "2,2 km",
    "time": "🚗 5 min",
    "badge": "Aberto agora",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.71911,
      "lng": -38.49657
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Clínica Vet & Vida é referência em cuidados de saúde animal no bairro Meireles. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "26",
    "name": "Pet Mania Rações",
    "category": "Petshop",
    "neighborhood": "Meireles",
    "address": "Av. Beira Mar, 125 - Meireles, Fortaleza - CE",
    "phone": "(85) 3675-1925",
    "whatsapp": "(85) 99075-1925",
    "rating": "4,6",
    "reviewsCount": 73,
    "services": "Petshop • Rações • Acessórios",
    "distance": "1,2 km",
    "time": "🚗 4 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.73152,
      "lng": -38.49322
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet Mania Rações oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "27",
    "name": "Pelo & Patas Spa Animal",
    "category": "Banho",
    "neighborhood": "Meireles",
    "address": "Rua Silva Jatahy, 198 - Meireles, Fortaleza - CE",
    "phone": "(85) 3694-1962",
    "whatsapp": "(85) 99118-1962",
    "rating": "4,7",
    "reviewsCount": 90,
    "services": "Banho • Tosa • Hidratação",
    "distance": "1,4 km",
    "time": "🚗 4 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.73182,
      "lng": -38.49067
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pelo & Patas Spa Animal é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "28",
    "name": "Hospital Veterinário Pet Center",
    "category": "Veterinária",
    "neighborhood": "Meireles",
    "address": "Rua Ana Bilhar, 271 - Meireles, Fortaleza - CE",
    "phone": "(85) 3713-1999",
    "whatsapp": "(85) 99161-1999",
    "rating": "4,8",
    "reviewsCount": 107,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "2,3 km",
    "time": "🚗 5 min",
    "badge": "Aberto 24h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.72169,
      "lng": -38.48923
    },
    "openingHours": {
      "status": "Plantão 24 horas",
      "badge": "Aberto 24h",
      "weekdays": "Aberto 24 horas (todos os dias)",
      "saturday": "Aberto 24 horas",
      "sunday": "Aberto 24 horas"
    },
    "about": "A Hospital Veterinário Pet Center é referência em cuidados de saúde animal no bairro Meireles. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "29",
    "name": "Cantinho do Pet",
    "category": "Petshop",
    "neighborhood": "Meireles",
    "address": "Rua Canuto de Aguiar, 344 - Meireles, Fortaleza - CE",
    "phone": "(85) 3732-2036",
    "whatsapp": "(85) 99204-2036",
    "rating": "4,9",
    "reviewsCount": 124,
    "services": "Petshop • Rações • Acessórios",
    "distance": "1,4 km",
    "time": "🚗 4 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.72685,
      "lng": -38.49666
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Cantinho do Pet oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "30",
    "name": "Beleza Animal Banho e Tosa",
    "category": "Banho",
    "neighborhood": "Meireles",
    "address": "Rua Pereira Valente, 417 - Meireles, Fortaleza - CE",
    "phone": "(85) 3751-2073",
    "whatsapp": "(85) 99247-2073",
    "rating": "5,0",
    "reviewsCount": 141,
    "services": "Banho • Tosa • Hidratação",
    "distance": "1,1 km",
    "time": "🚗 4 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.72899,
      "lng": -38.4974
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Beleza Animal Banho e Tosa é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "31",
    "name": "Clínica Veterinária Dr. Cão Meireles",
    "category": "Veterinária",
    "neighborhood": "Meireles",
    "address": "Av. Beira Mar, 490 - Meireles, Fortaleza - CE",
    "phone": "(85) 3770-2110",
    "whatsapp": "(85) 99290-2110",
    "rating": "4,5",
    "reviewsCount": 158,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "1,5 km",
    "time": "🚗 4 min",
    "badge": "Aberto agora",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.72449,
      "lng": -38.49875
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Clínica Veterinária Dr. Cão Meireles é referência em cuidados de saúde animal no bairro Meireles. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "32",
    "name": "Pet Show Fortaleza",
    "category": "Petshop",
    "neighborhood": "Meireles",
    "address": "Rua Silva Jatahy, 563 - Meireles, Fortaleza - CE",
    "phone": "(85) 3789-2147",
    "whatsapp": "(85) 99333-2147",
    "rating": "4,6",
    "reviewsCount": 175,
    "services": "Petshop • Rações • Acessórios",
    "distance": "1,1 km",
    "time": "🚗 4 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.72814,
      "lng": -38.50017
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet Show Fortaleza oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "33",
    "name": "Estética Pet Bicho Limpo Varjota",
    "category": "Banho",
    "neighborhood": "Varjota",
    "address": "Rua Frederico Borges, 636 - Varjota, Fortaleza - CE",
    "phone": "(85) 3808-2184",
    "whatsapp": "(85) 99376-2184",
    "rating": "4,7",
    "reviewsCount": 192,
    "services": "Banho • Tosa • Hidratação",
    "distance": "1,3 km",
    "time": "🚗 4 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.73897,
      "lng": -38.49012
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Estética Pet Bicho Limpo Varjota é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "34",
    "name": "ProntoVet Emergências Varjota",
    "category": "Veterinária",
    "neighborhood": "Varjota",
    "address": "Rua Tavares Coutinho, 709 - Varjota, Fortaleza - CE",
    "phone": "(85) 3827-2221",
    "whatsapp": "(85) 99419-2221",
    "rating": "4,8",
    "reviewsCount": 209,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "1,7 km",
    "time": "🚗 4 min",
    "badge": "Aberto 24h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.72849,
      "lng": -38.49016
    },
    "openingHours": {
      "status": "Plantão 24 horas",
      "badge": "Aberto 24h",
      "weekdays": "Aberto 24 horas (todos os dias)",
      "saturday": "Aberto 24 horas",
      "sunday": "Aberto 24 horas"
    },
    "about": "A ProntoVet Emergências Varjota é referência em cuidados de saúde animal no bairro Varjota. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "35",
    "name": "Mega Petstore Varjota",
    "category": "Petshop",
    "neighborhood": "Varjota",
    "address": "Rua Castro Monte, 782 - Varjota, Fortaleza - CE",
    "phone": "(85) 3846-2258",
    "whatsapp": "(85) 99462-2258",
    "rating": "4,9",
    "reviewsCount": 36,
    "services": "Petshop • Rações • Acessórios",
    "distance": "1,7 km",
    "time": "🚗 4 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.73043,
      "lng": -38.48904
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Mega Petstore Varjota oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "36",
    "name": "Charme Canino Spa Varjota",
    "category": "Banho",
    "neighborhood": "Varjota",
    "address": "Rua Silva Paulet, 855 - Varjota, Fortaleza - CE",
    "phone": "(85) 3865-2295",
    "whatsapp": "(85) 99505-2295",
    "rating": "5,0",
    "reviewsCount": 53,
    "services": "Banho • Tosa • Hidratação",
    "distance": "950 m",
    "time": "🚶 12 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.74174,
      "lng": -38.49447
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Charme Canino Spa Varjota é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "37",
    "name": "Clínica Amigo Fiel Varjota",
    "category": "Veterinária",
    "neighborhood": "Varjota",
    "address": "Rua Frederico Borges, 928 - Varjota, Fortaleza - CE",
    "phone": "(85) 3884-2332",
    "whatsapp": "(85) 99548-2332",
    "rating": "4,5",
    "reviewsCount": 70,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "1,4 km",
    "time": "🚗 4 min",
    "badge": "Aberto agora",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.73167,
      "lng": -38.4913
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Clínica Amigo Fiel Varjota é referência em cuidados de saúde animal no bairro Varjota. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "38",
    "name": "Boutique das Patinhas Varjota",
    "category": "Petshop",
    "neighborhood": "Varjota",
    "address": "Rua Tavares Coutinho, 1001 - Varjota, Fortaleza - CE",
    "phone": "(85) 3203-2369",
    "whatsapp": "(85) 99591-2369",
    "rating": "4,6",
    "reviewsCount": 87,
    "services": "Petshop • Rações • Acessórios",
    "distance": "1,7 km",
    "time": "🚗 4 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.73176,
      "lng": -38.48767
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Boutique das Patinhas Varjota oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "39",
    "name": "Top Grooming Fortaleza",
    "category": "Banho",
    "neighborhood": "Dionísio Torres",
    "address": "Rua Tibúrcio Cavalcante, 1074 - Dionísio Torres, Fortaleza - CE",
    "phone": "(85) 3222-2406",
    "whatsapp": "(85) 99634-2406",
    "rating": "4,7",
    "reviewsCount": 104,
    "services": "Banho • Tosa • Hidratação",
    "distance": "1,6 km",
    "time": "🚗 4 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.7523,
      "lng": -38.50514
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Top Grooming Fortaleza é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "40",
    "name": "Vida Pet Medicina Veterinária Dionísio Torres",
    "category": "Veterinária",
    "neighborhood": "Dionísio Torres",
    "address": "Rua Marcondes Pereira, 1147 - Dionísio Torres, Fortaleza - CE",
    "phone": "(85) 3241-2443",
    "whatsapp": "(85) 99677-2443",
    "rating": "4,8",
    "reviewsCount": 121,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "550 m",
    "time": "🚶 7 min",
    "badge": "Aberto até 19h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.743,
      "lng": -38.50223
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Vida Pet Medicina Veterinária Dionísio Torres é referência em cuidados de saúde animal no bairro Dionísio Torres. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "41",
    "name": "Empório Pet & Rações Dionísio Torres",
    "category": "Petshop",
    "neighborhood": "Dionísio Torres",
    "address": "Av. Antônio Sales, 1220 - Dionísio Torres, Fortaleza - CE",
    "phone": "(85) 3260-2480",
    "whatsapp": "(85) 99720-2480",
    "rating": "4,9",
    "reviewsCount": 138,
    "services": "Petshop • Rações • Acessórios",
    "distance": "1,0 km",
    "time": "🚗 4 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.74719,
      "lng": -38.50032
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Empório Pet & Rações Dionísio Torres oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "42",
    "name": "Lava Cão & Gato Express Dionísio Torres",
    "category": "Banho",
    "neighborhood": "Dionísio Torres",
    "address": "Rua Joaquim Nabuco, 1293 - Dionísio Torres, Fortaleza - CE",
    "phone": "(85) 3279-2517",
    "whatsapp": "(85) 99763-2517",
    "rating": "5,0",
    "reviewsCount": 155,
    "services": "Banho • Tosa • Hidratação",
    "distance": "1,9 km",
    "time": "🚗 4 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.75462,
      "lng": -38.4996
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Lava Cão & Gato Express Dionísio Torres é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "43",
    "name": "VetClin Especialistas Dionísio Torres",
    "category": "Veterinária",
    "neighborhood": "Dionísio Torres",
    "address": "Rua Tibúrcio Cavalcante, 1366 - Dionísio Torres, Fortaleza - CE",
    "phone": "(85) 3298-2554",
    "whatsapp": "(85) 99806-2554",
    "rating": "4,5",
    "reviewsCount": 172,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "1,1 km",
    "time": "🚗 4 min",
    "badge": "Aberto agora",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.74644,
      "lng": -38.50768
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A VetClin Especialistas Dionísio Torres é referência em cuidados de saúde animal no bairro Dionísio Torres. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "44",
    "name": "Tudo Para Seu Pet Dionísio Torres",
    "category": "Petshop",
    "neighborhood": "Dionísio Torres",
    "address": "Rua Marcondes Pereira, 1439 - Dionísio Torres, Fortaleza - CE",
    "phone": "(85) 3317-2591",
    "whatsapp": "(85) 99849-2591",
    "rating": "4,6",
    "reviewsCount": 189,
    "services": "Petshop • Rações • Acessórios",
    "distance": "900 m",
    "time": "🚶 11 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.74275,
      "lng": -38.50884
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Tudo Para Seu Pet Dionísio Torres oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "45",
    "name": "Penteado & Cia Banho e Tosa Cocó",
    "category": "Banho",
    "neighborhood": "Cocó",
    "address": "Av. Padre Antônio Tomás, 1512 - Cocó, Fortaleza - CE",
    "phone": "(85) 3336-2628",
    "whatsapp": "(85) 99892-2628",
    "rating": "4,7",
    "reviewsCount": 206,
    "services": "Banho • Tosa • Hidratação",
    "distance": "2,5 km",
    "time": "🚗 5 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.75273,
      "lng": -38.4853
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Penteado & Cia Banho e Tosa Cocó é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "46",
    "name": "Clínica Veterinária Estimação Cocó",
    "category": "Veterinária",
    "neighborhood": "Cocó",
    "address": "Rua Bento Albuquerque, 1585 - Cocó, Fortaleza - CE",
    "phone": "(85) 3355-2665",
    "whatsapp": "(85) 98035-2665",
    "rating": "4,8",
    "reviewsCount": 33,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "2,3 km",
    "time": "🚗 5 min",
    "badge": "Aberto até 19h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.75193,
      "lng": -38.4865
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Clínica Veterinária Estimação Cocó é referência em cuidados de saúde animal no bairro Cocó. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "47",
    "name": "Pet Gourmet & Boutique Cocó",
    "category": "Petshop",
    "neighborhood": "Cocó",
    "address": "Rua Andrade Furtado, 1658 - Cocó, Fortaleza - CE",
    "phone": "(85) 3374-2702",
    "whatsapp": "(85) 98078-2702",
    "rating": "4,9",
    "reviewsCount": 50,
    "services": "Petshop • Rações • Acessórios",
    "distance": "1,9 km",
    "time": "🚗 4 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.74648,
      "lng": -38.48694
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet Gourmet & Boutique Cocó oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "48",
    "name": "Pet Spa Relax Cocó",
    "category": "Banho",
    "neighborhood": "Cocó",
    "address": "Av. Engenheiro Santana Júnior, 1731 - Cocó, Fortaleza - CE",
    "phone": "(85) 3393-2739",
    "whatsapp": "(85) 98121-2739",
    "rating": "5,0",
    "reviewsCount": 67,
    "services": "Banho • Tosa • Hidratação",
    "distance": "2,5 km",
    "time": "🚗 6 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.75462,
      "lng": -38.48629
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet Spa Relax Cocó é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "49",
    "name": "CuidarVet Consultas e Cirurgias Cocó",
    "category": "Veterinária",
    "neighborhood": "Cocó",
    "address": "Av. Padre Antônio Tomás, 1804 - Cocó, Fortaleza - CE",
    "phone": "(85) 3412-2776",
    "whatsapp": "(85) 98164-2776",
    "rating": "4,5",
    "reviewsCount": 84,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "2,3 km",
    "time": "🚗 5 min",
    "badge": "Aberto agora",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.74945,
      "lng": -38.48446
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A CuidarVet Consultas e Cirurgias Cocó é referência em cuidados de saúde animal no bairro Cocó. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "50",
    "name": "Rei dos Animais Pet Shop Cocó",
    "category": "Petshop",
    "neighborhood": "Cocó",
    "address": "Rua Bento Albuquerque, 1877 - Cocó, Fortaleza - CE",
    "phone": "(85) 3431-2813",
    "whatsapp": "(85) 98207-2813",
    "rating": "4,6",
    "reviewsCount": 101,
    "services": "Petshop • Rações • Acessórios",
    "distance": "1,5 km",
    "time": "🚗 4 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.74241,
      "lng": -38.4893
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Rei dos Animais Pet Shop Cocó oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "51",
    "name": "Bicho Chic Banho e Tosa Papicu",
    "category": "Banho",
    "neighborhood": "Papicu",
    "address": "Av. Alberto Sá, 150 - Papicu, Fortaleza - CE",
    "phone": "(85) 3450-2850",
    "whatsapp": "(85) 98250-2850",
    "rating": "4,7",
    "reviewsCount": 118,
    "services": "Banho • Tosa • Hidratação",
    "distance": "2,9 km",
    "time": "🚗 6 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.74832,
      "lng": -38.47779
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Bicho Chic Banho e Tosa Papicu é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "52",
    "name": "Vetsul Hospital Papicu",
    "category": "Veterinária",
    "neighborhood": "Papicu",
    "address": "Rua Pereira de Miranda, 223 - Papicu, Fortaleza - CE",
    "phone": "(85) 3469-2887",
    "whatsapp": "(85) 98293-2887",
    "rating": "4,8",
    "reviewsCount": 135,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "3,2 km",
    "time": "🚗 7 min",
    "badge": "Aberto 24h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.74495,
      "lng": -38.47415
    },
    "openingHours": {
      "status": "Plantão 24 horas",
      "badge": "Aberto 24h",
      "weekdays": "Aberto 24 horas (todos os dias)",
      "saturday": "Aberto 24 horas",
      "sunday": "Aberto 24 horas"
    },
    "about": "A Vetsul Hospital Papicu é referência em cuidados de saúde animal no bairro Papicu. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "53",
    "name": "Estilo Pet Store Papicu",
    "category": "Petshop",
    "neighborhood": "Papicu",
    "address": "Av. Santos Dumont, 296 - Papicu, Fortaleza - CE",
    "phone": "(85) 3488-2924",
    "whatsapp": "(85) 98336-2924",
    "rating": "4,9",
    "reviewsCount": 152,
    "services": "Petshop • Rações • Acessórios",
    "distance": "3,4 km",
    "time": "🚗 8 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.73655,
      "lng": -38.47094
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Estilo Pet Store Papicu oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "54",
    "name": "Amor & Espuma Pet Wash Papicu",
    "category": "Banho",
    "neighborhood": "Papicu",
    "address": "Rua Desembargador Lauro Nogueira, 369 - Papicu, Fortaleza - CE",
    "phone": "(85) 3507-2961",
    "whatsapp": "(85) 98379-2961",
    "rating": "5,0",
    "reviewsCount": 169,
    "services": "Banho • Tosa • Hidratação",
    "distance": "3,8 km",
    "time": "🚗 8 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.74385,
      "lng": -38.4686
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Amor & Espuma Pet Wash Papicu é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "55",
    "name": "PetCare Emergência Animal Papicu",
    "category": "Veterinária",
    "neighborhood": "Papicu",
    "address": "Av. Alberto Sá, 442 - Papicu, Fortaleza - CE",
    "phone": "(85) 3526-2998",
    "whatsapp": "(85) 98422-2998",
    "rating": "4,5",
    "reviewsCount": 186,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "3,9 km",
    "time": "🚗 8 min",
    "badge": "Aberto agora",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.74236,
      "lng": -38.46741
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A PetCare Emergência Animal Papicu é referência em cuidados de saúde animal no bairro Papicu. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "56",
    "name": "Pet Express Conveniência Praia de Iracema",
    "category": "Petshop",
    "neighborhood": "Praia de Iracema",
    "address": "Rua Tremembés, 515 - Praia de Iracema, Fortaleza - CE",
    "phone": "(85) 3545-3035",
    "whatsapp": "(85) 98465-3035",
    "rating": "4,6",
    "reviewsCount": 203,
    "services": "Petshop • Rações • Acessórios",
    "distance": "2,5 km",
    "time": "🚗 5 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.71591,
      "lng": -38.50638
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet Express Conveniência Praia de Iracema oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "57",
    "name": "Estilo Livre Pet Groomer Praia de Iracema",
    "category": "Banho",
    "neighborhood": "Praia de Iracema",
    "address": "Av. Historiador Raimundo Girão, 588 - Praia de Iracema, Fortaleza - CE",
    "phone": "(85) 3564-3072",
    "whatsapp": "(85) 98508-3072",
    "rating": "4,7",
    "reviewsCount": 30,
    "services": "Banho • Tosa • Hidratação",
    "distance": "2,3 km",
    "time": "🚗 5 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.72226,
      "lng": -38.51499
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Estilo Livre Pet Groomer Praia de Iracema é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "58",
    "name": "Bichos e Caprichos Veterinária Praia de Iracema",
    "category": "Veterinária",
    "neighborhood": "Praia de Iracema",
    "address": "Rua dos Tabajaras, 661 - Praia de Iracema, Fortaleza - CE",
    "phone": "(85) 3583-3109",
    "whatsapp": "(85) 98551-3109",
    "rating": "4,8",
    "reviewsCount": 47,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "2,3 km",
    "time": "🚗 5 min",
    "badge": "Aberto até 19h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.72267,
      "lng": -38.51639
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Bichos e Caprichos Veterinária Praia de Iracema é referência em cuidados de saúde animal no bairro Praia de Iracema. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "59",
    "name": "Amor aos Bichos Pet Shop Praia de Iracema",
    "category": "Petshop",
    "neighborhood": "Praia de Iracema",
    "address": "Rua dos Pacajus, 734 - Praia de Iracema, Fortaleza - CE",
    "phone": "(85) 3602-3146",
    "whatsapp": "(85) 98594-3146",
    "rating": "4,9",
    "reviewsCount": 64,
    "services": "Petshop • Rações • Acessórios",
    "distance": "3,3 km",
    "time": "🚗 7 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.71251,
      "lng": -38.51776
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Amor aos Bichos Pet Shop Praia de Iracema oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "60",
    "name": "Spa das Patinhas Centro",
    "category": "Banho",
    "neighborhood": "Centro",
    "address": "Rua Pedro Pereira, 807 - Centro, Fortaleza - CE",
    "phone": "(85) 3621-3183",
    "whatsapp": "(85) 98637-3183",
    "rating": "5,0",
    "reviewsCount": 81,
    "services": "Banho • Tosa • Hidratação",
    "distance": "3,8 km",
    "time": "🚗 8 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.72659,
      "lng": -38.53455
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Spa das Patinhas Centro é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "61",
    "name": "Clínica Amor de Bicho Centro",
    "category": "Veterinária",
    "neighborhood": "Centro",
    "address": "Rua Senador Pompeu, 880 - Centro, Fortaleza - CE",
    "phone": "(85) 3640-3220",
    "whatsapp": "(85) 98680-3220",
    "rating": "4,5",
    "reviewsCount": 98,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "3,6 km",
    "time": "🚗 8 min",
    "badge": "Aberto agora",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.73482,
      "lng": -38.53435
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Clínica Amor de Bicho Centro é referência em cuidados de saúde animal no bairro Centro. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "62",
    "name": "Pet & Cia Rações Centro",
    "category": "Petshop",
    "neighborhood": "Centro",
    "address": "Rua Major Facundo, 953 - Centro, Fortaleza - CE",
    "phone": "(85) 3659-3257",
    "whatsapp": "(85) 98723-3257",
    "rating": "4,6",
    "reviewsCount": 115,
    "services": "Petshop • Rações • Acessórios",
    "distance": "3,8 km",
    "time": "🚗 8 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.72432,
      "lng": -38.53298
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet & Cia Rações Centro oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "63",
    "name": "Banho de Espuma Pet Centro",
    "category": "Banho",
    "neighborhood": "Centro",
    "address": "Av. Duque de Caxias, 1026 - Centro, Fortaleza - CE",
    "phone": "(85) 3678-3294",
    "whatsapp": "(85) 98766-3294",
    "rating": "4,7",
    "reviewsCount": 132,
    "services": "Banho • Tosa • Hidratação",
    "distance": "3,4 km",
    "time": "🚗 7 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.72787,
      "lng": -38.53049
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Banho de Espuma Pet Centro é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "64",
    "name": "Vet House Clínica Benfica",
    "category": "Veterinária",
    "neighborhood": "Benfica",
    "address": "Rua Waldery Uchôa, 1099 - Benfica, Fortaleza - CE",
    "phone": "(85) 3697-3331",
    "whatsapp": "(85) 98809-3331",
    "rating": "4,8",
    "reviewsCount": 149,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "4,6 km",
    "time": "🚗 10 min",
    "badge": "Aberto até 19h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.74479,
      "lng": -38.54288
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Vet House Clínica Benfica é referência em cuidados de saúde animal no bairro Benfica. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "65",
    "name": "Pura Vida Pet Store Benfica",
    "category": "Petshop",
    "neighborhood": "Benfica",
    "address": "Av. Treze de Maio, 1172 - Benfica, Fortaleza - CE",
    "phone": "(85) 3716-3368",
    "whatsapp": "(85) 98852-3368",
    "rating": "4,9",
    "reviewsCount": 166,
    "services": "Petshop • Rações • Acessórios",
    "distance": "4,1 km",
    "time": "🚗 9 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.73433,
      "lng": -38.53923
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pura Vida Pet Store Benfica oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "66",
    "name": "Pet VIP Estética Animal Benfica",
    "category": "Banho",
    "neighborhood": "Benfica",
    "address": "Av. da Universidade, 1245 - Benfica, Fortaleza - CE",
    "phone": "(85) 3735-3405",
    "whatsapp": "(85) 98895-3405",
    "rating": "5,0",
    "reviewsCount": 183,
    "services": "Banho • Tosa • Hidratação",
    "distance": "3,8 km",
    "time": "🚗 8 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.74216,
      "lng": -38.53579
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet VIP Estética Animal Benfica é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "67",
    "name": "Clínica Veterinária Santa Clara Benfica",
    "category": "Veterinária",
    "neighborhood": "Benfica",
    "address": "Rua Carapinima, 1318 - Benfica, Fortaleza - CE",
    "phone": "(85) 3754-3442",
    "whatsapp": "(85) 98938-3442",
    "rating": "4,5",
    "reviewsCount": 200,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "3,6 km",
    "time": "🚗 8 min",
    "badge": "Aberto agora",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.74756,
      "lng": -38.53306
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Clínica Veterinária Santa Clara Benfica é referência em cuidados de saúde animal no bairro Benfica. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "68",
    "name": "Império dos Pets Bairro de Fátima",
    "category": "Petshop",
    "neighborhood": "Bairro de Fátima",
    "address": "Rua Graciliano Ramos, 1391 - Bairro de Fátima, Fortaleza - CE",
    "phone": "(85) 3773-3479",
    "whatsapp": "(85) 98981-3479",
    "rating": "4,6",
    "reviewsCount": 217,
    "services": "Petshop • Rações • Acessórios",
    "distance": "2,6 km",
    "time": "🚗 6 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.75052,
      "lng": -38.5214
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Império dos Pets Bairro de Fátima oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "69",
    "name": "Grooming House Fortaleza",
    "category": "Banho",
    "neighborhood": "Bairro de Fátima",
    "address": "Av. 13 de Maio, 1464 - Bairro de Fátima, Fortaleza - CE",
    "phone": "(85) 3792-3516",
    "whatsapp": "(85) 99024-3516",
    "rating": "4,7",
    "reviewsCount": 44,
    "services": "Banho • Tosa • Hidratação",
    "distance": "2,5 km",
    "time": "🚗 6 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.7505,
      "lng": -38.52093
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Grooming House Fortaleza é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "70",
    "name": "Alpha Vet Centro Médico Bairro de Fátima",
    "category": "Veterinária",
    "neighborhood": "Bairro de Fátima",
    "address": "Av. Luciano Carneiro, 1537 - Bairro de Fátima, Fortaleza - CE",
    "phone": "(85) 3811-3553",
    "whatsapp": "(85) 99067-3553",
    "rating": "4,8",
    "reviewsCount": 61,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "3,0 km",
    "time": "🚗 7 min",
    "badge": "Aberto até 19h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.7571,
      "lng": -38.52151
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Alpha Vet Centro Médico Bairro de Fátima é referência em cuidados de saúde animal no bairro Bairro de Fátima. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "71",
    "name": "Central dos Pets Fortaleza",
    "category": "Petshop",
    "neighborhood": "Bairro de Fátima",
    "address": "Rua Martinho Rodrigues, 1610 - Bairro de Fátima, Fortaleza - CE",
    "phone": "(85) 3830-3590",
    "whatsapp": "(85) 99110-3590",
    "rating": "4,9",
    "reviewsCount": 78,
    "services": "Petshop • Rações • Acessórios",
    "distance": "3,6 km",
    "time": "🚗 8 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.75386,
      "lng": -38.53048
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Central dos Pets Fortaleza oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "72",
    "name": "Pet Clean Estética Parquelândia",
    "category": "Banho",
    "neighborhood": "Parquelândia",
    "address": "Rua Érico Mota, 1683 - Parquelândia, Fortaleza - CE",
    "phone": "(85) 3849-3627",
    "whatsapp": "(85) 99153-3627",
    "rating": "5,0",
    "reviewsCount": 95,
    "services": "Banho • Tosa • Hidratação",
    "distance": "6,6 km",
    "time": "🚗 15 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.73594,
      "lng": -38.56193
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet Clean Estética Parquelândia é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "73",
    "name": "Clínica Veterinária Leãozinho Parquelândia",
    "category": "Veterinária",
    "neighborhood": "Parquelândia",
    "address": "Av. Bezerra de Menezes, 1756 - Parquelândia, Fortaleza - CE",
    "phone": "(85) 3868-3664",
    "whatsapp": "(85) 99196-3664",
    "rating": "4,5",
    "reviewsCount": 112,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "6,8 km",
    "time": "🚗 15 min",
    "badge": "Aberto agora",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.74341,
      "lng": -38.563
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Clínica Veterinária Leãozinho Parquelândia é referência em cuidados de saúde animal no bairro Parquelândia. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "74",
    "name": "Pet Delícia Rações Premium Parquelândia",
    "category": "Petshop",
    "neighborhood": "Parquelândia",
    "address": "Rua Jovita Feitosa, 1829 - Parquelândia, Fortaleza - CE",
    "phone": "(85) 3887-3701",
    "whatsapp": "(85) 99239-3701",
    "rating": "4,6",
    "reviewsCount": 129,
    "services": "Petshop • Rações • Acessórios",
    "distance": "6,8 km",
    "time": "🚗 15 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.7353,
      "lng": -38.56323
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet Delícia Rações Premium Parquelândia oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "75",
    "name": "Bella Pet Spa & Banho Parquelândia",
    "category": "Banho",
    "neighborhood": "Parquelândia",
    "address": "Rua Humberto Monte, 102 - Parquelândia, Fortaleza - CE",
    "phone": "(85) 3206-3738",
    "whatsapp": "(85) 99282-3738",
    "rating": "4,7",
    "reviewsCount": 146,
    "services": "Banho • Tosa • Hidratação",
    "distance": "6,7 km",
    "time": "🚗 15 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.73151,
      "lng": -38.56233
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Bella Pet Spa & Banho Parquelândia é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "76",
    "name": "Harmonia Pet Clínica Montese",
    "category": "Veterinária",
    "neighborhood": "Montese",
    "address": "Rua Teodorico Barroso, 175 - Montese, Fortaleza - CE",
    "phone": "(85) 3225-3775",
    "whatsapp": "(85) 99325-3775",
    "rating": "4,8",
    "reviewsCount": 163,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "6,8 km",
    "time": "🚗 15 min",
    "badge": "Aberto até 19h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.7725,
      "lng": -38.55226
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Harmonia Pet Clínica Montese é referência em cuidados de saúde animal no bairro Montese. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "77",
    "name": "Pet Charme Boutique Montese",
    "category": "Petshop",
    "neighborhood": "Montese",
    "address": "Av. Professor Gomes de Matos, 248 - Montese, Fortaleza - CE",
    "phone": "(85) 3244-3812",
    "whatsapp": "(85) 99368-3812",
    "rating": "4,9",
    "reviewsCount": 180,
    "services": "Petshop • Rações • Acessórios",
    "distance": "6,1 km",
    "time": "🚗 13 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.7658,
      "lng": -38.54923
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet Charme Boutique Montese oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "78",
    "name": "Tosa Fina Estética Animal Montese",
    "category": "Banho",
    "neighborhood": "Montese",
    "address": "Rua Alberto Magno, 321 - Montese, Fortaleza - CE",
    "phone": "(85) 3263-3849",
    "whatsapp": "(85) 99411-3849",
    "rating": "5,0",
    "reviewsCount": 197,
    "services": "Banho • Tosa • Hidratação",
    "distance": "6,2 km",
    "time": "🚗 14 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.76025,
      "lng": -38.55334
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Tosa Fina Estética Animal Montese é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "79",
    "name": "TopVet Diagnósticos Montese",
    "category": "Veterinária",
    "neighborhood": "Montese",
    "address": "Rua Irmã Bazet, 394 - Montese, Fortaleza - CE",
    "phone": "(85) 3282-3886",
    "whatsapp": "(85) 99454-3886",
    "rating": "4,5",
    "reviewsCount": 214,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "6,3 km",
    "time": "🚗 14 min",
    "badge": "Aberto agora",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.76838,
      "lng": -38.54975
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A TopVet Diagnósticos Montese é referência em cuidados de saúde animal no bairro Montese. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "80",
    "name": "Mimos Pet Shop Edson Queiroz",
    "category": "Petshop",
    "neighborhood": "Edson Queiroz",
    "address": "Rua Valdetário Mota, 467 - Edson Queiroz, Fortaleza - CE",
    "phone": "(85) 3301-3923",
    "whatsapp": "(85) 99497-3923",
    "rating": "4,6",
    "reviewsCount": 41,
    "services": "Petshop • Rações • Acessórios",
    "distance": "4,4 km",
    "time": "🚗 10 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.76632,
      "lng": -38.47469
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Mimos Pet Shop Edson Queiroz oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "81",
    "name": "Banho & Arte Pet Care Edson Queiroz",
    "category": "Banho",
    "neighborhood": "Edson Queiroz",
    "address": "Av. Desembargador Floriano Benevides, 540 - Edson Queiroz, Fortaleza - CE",
    "phone": "(85) 3320-3960",
    "whatsapp": "(85) 99540-3960",
    "rating": "4,7",
    "reviewsCount": 58,
    "services": "Banho • Tosa • Hidratação",
    "distance": "4,4 km",
    "time": "🚗 10 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.76519,
      "lng": -38.47258
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Banho & Arte Pet Care Edson Queiroz é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "82",
    "name": "PetLife Veterinária Integrada Edson Queiroz",
    "category": "Veterinária",
    "neighborhood": "Edson Queiroz",
    "address": "Av. Washington Soares, 613 - Edson Queiroz, Fortaleza - CE",
    "phone": "(85) 3339-3997",
    "whatsapp": "(85) 99583-3997",
    "rating": "4,8",
    "reviewsCount": 75,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "5,1 km",
    "time": "🚗 11 min",
    "badge": "Aberto até 19h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.77307,
      "lng": -38.47164
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A PetLife Veterinária Integrada Edson Queiroz é referência em cuidados de saúde animal no bairro Edson Queiroz. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "83",
    "name": "Pet & Dog Acessórios Edson Queiroz",
    "category": "Petshop",
    "neighborhood": "Edson Queiroz",
    "address": "Rua Valdetário Mota, 686 - Edson Queiroz, Fortaleza - CE",
    "phone": "(85) 3358-4034",
    "whatsapp": "(85) 99626-4034",
    "rating": "4,9",
    "reviewsCount": 92,
    "services": "Petshop • Rações • Acessórios",
    "distance": "4,9 km",
    "time": "🚗 11 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.7698,
      "lng": -38.47184
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet & Dog Acessórios Edson Queiroz oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "84",
    "name": "Groomer Pro Fortaleza",
    "category": "Banho",
    "neighborhood": "Guararapes",
    "address": "Rua Atilano de Moura, 759 - Guararapes, Fortaleza - CE",
    "phone": "(85) 3377-4071",
    "whatsapp": "(85) 99669-4071",
    "rating": "5,0",
    "reviewsCount": 109,
    "services": "Banho • Tosa • Hidratação",
    "distance": "2,5 km",
    "time": "🚗 6 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.75334,
      "lng": -38.48489
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Groomer Pro Fortaleza é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "85",
    "name": "Anjos de Quatro Patas Vet Guararapes",
    "category": "Veterinária",
    "neighborhood": "Guararapes",
    "address": "Av. Miguel Dias, 832 - Guararapes, Fortaleza - CE",
    "phone": "(85) 3396-4108",
    "whatsapp": "(85) 99712-4108",
    "rating": "4,5",
    "reviewsCount": 126,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "2,7 km",
    "time": "🚗 6 min",
    "badge": "Aberto agora",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.7606,
      "lng": -38.49404
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Anjos de Quatro Patas Vet Guararapes é referência em cuidados de saúde animal no bairro Guararapes. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "86",
    "name": "Pet Lovers Fortaleza",
    "category": "Petshop",
    "neighborhood": "Guararapes",
    "address": "Rua Coronel Jucá, 905 - Guararapes, Fortaleza - CE",
    "phone": "(85) 3415-4145",
    "whatsapp": "(85) 99755-4145",
    "rating": "4,6",
    "reviewsCount": 143,
    "services": "Petshop • Rações • Acessórios",
    "distance": "3,1 km",
    "time": "🚗 7 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.76522,
      "lng": -38.49532
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet Lovers Fortaleza oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "87",
    "name": "Delicadeza Pet Spa Cidade dos Funcionários",
    "category": "Banho",
    "neighborhood": "Cidade dos Funcionários",
    "address": "Rua Chico Lemos, 978 - Cidade dos Funcionários, Fortaleza - CE",
    "phone": "(85) 3434-4182",
    "whatsapp": "(85) 99798-4182",
    "rating": "4,7",
    "reviewsCount": 160,
    "services": "Banho • Tosa • Hidratação",
    "distance": "4,7 km",
    "time": "🚗 10 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.78072,
      "lng": -38.50093
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Delicadeza Pet Spa Cidade dos Funcionários é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "88",
    "name": "VitalVet Hospital Veterinário Cidade dos Funcionários",
    "category": "Veterinária",
    "neighborhood": "Cidade dos Funcionários",
    "address": "Av. Oliveira Paiva, 1051 - Cidade dos Funcionários, Fortaleza - CE",
    "phone": "(85) 3453-4219",
    "whatsapp": "(85) 99841-4219",
    "rating": "4,8",
    "reviewsCount": 177,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "5,4 km",
    "time": "🚗 12 min",
    "badge": "Aberto 24h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.78701,
      "lng": -38.5005
    },
    "openingHours": {
      "status": "Plantão 24 horas",
      "badge": "Aberto 24h",
      "weekdays": "Aberto 24 horas (todos os dias)",
      "saturday": "Aberto 24 horas",
      "sunday": "Aberto 24 horas"
    },
    "about": "A VitalVet Hospital Veterinário Cidade dos Funcionários é referência em cuidados de saúde animal no bairro Cidade dos Funcionários. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "89",
    "name": "Super Pet Rações Cidade dos Funcionários",
    "category": "Petshop",
    "neighborhood": "Cidade dos Funcionários",
    "address": "Rua Desembargador Gonzaga, 1124 - Cidade dos Funcionários, Fortaleza - CE",
    "phone": "(85) 3472-4256",
    "whatsapp": "(85) 99884-4256",
    "rating": "4,9",
    "reviewsCount": 194,
    "services": "Petshop • Rações • Acessórios",
    "distance": "5,5 km",
    "time": "🚗 12 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.78752,
      "lng": -38.49888
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Super Pet Rações Cidade dos Funcionários oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "90",
    "name": "Banho dos Sonhos Estética Pet Cidade dos Funcionários",
    "category": "Banho",
    "neighborhood": "Cidade dos Funcionários",
    "address": "Rua Chico Lemos, 1197 - Cidade dos Funcionários, Fortaleza - CE",
    "phone": "(85) 3491-4293",
    "whatsapp": "(85) 98027-4293",
    "rating": "5,0",
    "reviewsCount": 211,
    "services": "Banho • Tosa • Hidratação",
    "distance": "4,4 km",
    "time": "🚗 10 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.77732,
      "lng": -38.49618
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Banho dos Sonhos Estética Pet Cidade dos Funcionários é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "91",
    "name": "Clínica Veterinária Aldeota",
    "category": "Veterinária",
    "neighborhood": "Cambeba",
    "address": "Av. Ministro José Américo, 1270 - Cambeba, Fortaleza - CE",
    "phone": "(85) 3510-4330",
    "whatsapp": "(85) 98070-4330",
    "rating": "4,5",
    "reviewsCount": 38,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "8,0 km",
    "time": "🚗 18 min",
    "badge": "Aberto agora",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.80833,
      "lng": -38.48775
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Clínica Veterinária Aldeota é referência em cuidados de saúde animal no bairro Cambeba. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "92",
    "name": "Pet Store Aldeota",
    "category": "Petshop",
    "neighborhood": "Cambeba",
    "address": "Rua Pedro Lazar, 1343 - Cambeba, Fortaleza - CE",
    "phone": "(85) 3529-4367",
    "whatsapp": "(85) 98113-4367",
    "rating": "4,6",
    "reviewsCount": 55,
    "services": "Petshop • Rações • Acessórios",
    "distance": "8,1 km",
    "time": "🚗 18 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.81066,
      "lng": -38.4918
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet Store Aldeota oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "93",
    "name": "Aldeota Pet Spa",
    "category": "Banho",
    "neighborhood": "Cambeba",
    "address": "Rua Walter Porto, 1416 - Cambeba, Fortaleza - CE",
    "phone": "(85) 3548-4404",
    "whatsapp": "(85) 98156-4404",
    "rating": "4,7",
    "reviewsCount": 72,
    "services": "Banho • Tosa • Hidratação",
    "distance": "7,1 km",
    "time": "🚗 16 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.80015,
      "lng": -38.48847
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Aldeota Pet Spa é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "94",
    "name": "Clínica Veterinária Beira Mar Messejana",
    "category": "Veterinária",
    "neighborhood": "Messejana",
    "address": "Rua Coronel Francisco Pereira, 1489 - Messejana, Fortaleza - CE",
    "phone": "(85) 3567-4441",
    "whatsapp": "(85) 98199-4441",
    "rating": "4,8",
    "reviewsCount": 89,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "10,1 km",
    "time": "🚗 22 min",
    "badge": "Aberto até 19h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.82861,
      "lng": -38.49095
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Clínica Veterinária Beira Mar Messejana é referência em cuidados de saúde animal no bairro Messejana. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "95",
    "name": "Varjota Pet Shop Messejana",
    "category": "Petshop",
    "neighborhood": "Messejana",
    "address": "Rua Padre Pedro de Alencar, 1562 - Messejana, Fortaleza - CE",
    "phone": "(85) 3586-4478",
    "whatsapp": "(85) 98242-4478",
    "rating": "4,9",
    "reviewsCount": 106,
    "services": "Petshop • Rações • Acessórios",
    "distance": "10,6 km",
    "time": "🚗 23 min",
    "badge": "Aberto agora",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.83262,
      "lng": -38.48953
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Varjota Pet Shop Messejana oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "96",
    "name": "Meireles Grooming Studio Messejana",
    "category": "Banho",
    "neighborhood": "Messejana",
    "address": "Av. Jornalista Tomaz Coelho, 1635 - Messejana, Fortaleza - CE",
    "phone": "(85) 3605-4515",
    "whatsapp": "(85) 98285-4515",
    "rating": "5,0",
    "reviewsCount": 123,
    "services": "Banho • Tosa • Hidratação",
    "distance": "10,1 km",
    "time": "🚗 22 min",
    "badge": "Aberto até 19h",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.82817,
      "lng": -38.4893
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Meireles Grooming Studio Messejana é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  },
  {
    "id": "97",
    "name": "Meireles Vet Care Messejana",
    "category": "Veterinária",
    "neighborhood": "Messejana",
    "address": "Rua Coronel Francisco Pereira, 1708 - Messejana, Fortaleza - CE",
    "phone": "(85) 3624-4552",
    "whatsapp": "(85) 98328-4552",
    "rating": "4,5",
    "reviewsCount": 140,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "10,3 km",
    "time": "🚗 23 min",
    "badge": "Aberto agora",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.8299,
      "lng": -38.49007
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Meireles Vet Care Messejana é referência em cuidados de saúde animal no bairro Messejana. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      },
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      }
    ]
  },
  {
    "id": "98",
    "name": "Pet Shop Beira Mar Jóquei Clube",
    "category": "Petshop",
    "neighborhood": "Jóquei Clube",
    "address": "Av. Senador Fernandes Távora, 1781 - Jóquei Clube, Fortaleza - CE",
    "phone": "(85) 3643-4589",
    "whatsapp": "(85) 98371-4589",
    "rating": "4,6",
    "reviewsCount": 157,
    "services": "Petshop • Rações • Acessórios",
    "distance": "8,6 km",
    "time": "🚗 19 min",
    "badge": "Aberto até 19h",
    "icon": "🐶",
    "colorClass": "purple",
    "imageClass": "image-petshop",
    "petIllustration": "🐈",
    "coords": {
      "lat": -3.77337,
      "lng": -38.57142
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O Pet Shop Beira Mar Jóquei Clube oferece um catálogo completo das melhores marcas de rações, petiscos saudáveis, farmácia veterinária e acessórios modernos para cães, gatos e aves, com atendimento personalizado e carinho que seu pet merece.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes"
    ],
    "servicesList": [
      {
        "name": "Entrega Expressa / Delivery Pet",
        "description": "Receba rações pesadas e medicamentos no conforto da sua casa em até 2 horas.",
        "duration": "Até 2h",
        "price": "R$ 12,00"
      },
      {
        "name": "Consultoria Nutricional Pet",
        "description": "Orientação especializada para escolha da ração ideal para a idade e porte do seu pet.",
        "duration": "30 min",
        "price": "Gratuito"
      },
      {
        "name": "Aplicação de Antipulgas e Vermífugo",
        "description": "Administração correta da medicação por equipe treinada na loja.",
        "duration": "15 min",
        "price": "R$ 20,00"
      },
      {
        "name": "Personalização de Plaquinhas de Identificação",
        "description": "Gravação a laser imediata com nome do pet e telefone do tutor.",
        "duration": "15 min",
        "price": "R$ 35,00"
      }
    ],
    "productsList": [
      {
        "name": "Ração Premier Formula Cães Adultos Frango 15kg",
        "category": "Alimentação",
        "price": "R$ 289,90",
        "tag": "Super Premium",
        "icon": "🥩"
      },
      {
        "name": "Ração Golden Formula Gatos Castrados Salmão 3kg",
        "category": "Alimentação",
        "price": "R$ 79,90",
        "tag": "Oferta",
        "icon": "🐟"
      },
      {
        "name": "Antipulgas Simparic Cães (10 a 20kg)",
        "category": "Farmácia",
        "price": "R$ 104,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Cama Pet Nuvem Redonda Lavável Grande",
        "category": "Conforto",
        "price": "R$ 139,00",
        "tag": "Conforto",
        "icon": "🛏️"
      },
      {
        "name": "Brinquedo Mordedor Kong Clássico Vermelho (G)",
        "category": "Brinquedos",
        "price": "R$ 89,00",
        "tag": "Ultra Resistente",
        "icon": "🦴"
      },
      {
        "name": "Tapete Higiênico Chalesco 30 Unidades",
        "category": "Higiene",
        "price": "R$ 68,90",
        "tag": "Essencial",
        "icon": "📦"
      }
    ],
    "reviews": [
      {
        "author": "Carlos Eduardo",
        "pet": "Thor (Golden Retriever)",
        "rating": 5,
        "date": "Semana passada",
        "comment": "Ambiente muito limpo, climatizado e equipe super pontual. O Thor voltou feliz e cheiroso!"
      },
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      }
    ]
  },
  {
    "id": "99",
    "name": "AuMiau Banho & Tosa Jóquei Clube",
    "category": "Banho",
    "neighborhood": "Jóquei Clube",
    "address": "Rua Professor José Arthur de Carvalho, 1854 - Jóquei Clube, Fortaleza - CE",
    "phone": "(85) 3662-4626",
    "whatsapp": "(85) 98414-4626",
    "rating": "4,7",
    "reviewsCount": 174,
    "services": "Banho • Tosa • Hidratação",
    "distance": "9,1 km",
    "time": "🚗 20 min",
    "badge": "Aberto agora",
    "icon": "🛁",
    "colorClass": "yellow",
    "imageClass": "image-grooming",
    "petIllustration": "🛁",
    "coords": {
      "lat": -3.76337,
      "lng": -38.58053
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto agora",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: Fechado"
    },
    "about": "O AuMiau Banho & Tosa Jóquei Clube é um espaço especializado em estética, banho, tosa e relaxamento animal. Utilizamos cosméticos profissionais hipoalergênicos e profissionais certificados para garantir momentos agradáveis e tranquilos para o seu pet.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada",
      "Acessibilidade para cadeirantes",
      "Área de espera pet friendly"
    ],
    "servicesList": [
      {
        "name": "Banho Tradicional Completo",
        "description": "Lavagem dupla com shampoo neutro premium, limpeza de ouvidos, corte de unhas e secagem.",
        "duration": "50 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Banho & Tosa Higiênica",
        "description": "Banho completo + tosa das patinhas, região íntima e barriguinha para máximo conforto.",
        "duration": "1h 10 min",
        "price": "R$ 85,00"
      },
      {
        "name": "Tosa da Raça / Tosa na Tesoura",
        "description": "Escultura e modelagem profissional respeitando o padrão estético da raça.",
        "duration": "1h 40 min",
        "price": "R$ 120,00"
      },
      {
        "name": "Hidratação de Chocolate & Argan",
        "description": "Tratamento profundo para restaurar o brilho, maciez e desembaraço da pelagem.",
        "duration": "30 min",
        "price": "R$ 45,00"
      },
      {
        "name": "Banho Terapêutico / Ozonioterapia",
        "description": "Banho medicinal com água ozonizada para alívio de dermatites e alergias.",
        "duration": "1h",
        "price": "R$ 110,00"
      }
    ],
    "productsList": [
      {
        "name": "Shampoo Hipoalergênico Pet Society 500ml",
        "category": "Higiene",
        "price": "R$ 58,00",
        "tag": "Profissional",
        "icon": "🫧"
      },
      {
        "name": "Colônia Perfumada Pet Cheirinho de Bebê 120ml",
        "category": "Estética",
        "price": "R$ 38,00",
        "tag": "Cheiroso",
        "icon": "🌸"
      },
      {
        "name": "Escova Rasqueadeira com Cerdas Macias",
        "category": "Acessórios",
        "price": "R$ 42,00",
        "tag": "Desembaraço",
        "icon": "🪮"
      },
      {
        "name": "Kit Lacinhos e Bandanas Temáticas (10 unid)",
        "category": "Estilo",
        "price": "R$ 28,00",
        "tag": "Fofura",
        "icon": "🎀"
      }
    ],
    "reviews": [
      {
        "author": "Beatriz Nogueira",
        "pet": "Mia & Floquinho (Gatos)",
        "rating": 4,
        "date": "Há 2 semanas",
        "comment": "Profissionais muito pacientes com felinos. Preço justo e ótima localização."
      },
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      }
    ]
  },
  {
    "id": "100",
    "name": "Clínica Pet Papicu Jóquei Clube",
    "category": "Veterinária",
    "neighborhood": "Jóquei Clube",
    "address": "Av. Lineu Machado, 127 - Jóquei Clube, Fortaleza - CE",
    "phone": "(85) 3681-4663",
    "whatsapp": "(85) 98457-4663",
    "rating": "4,8",
    "reviewsCount": 191,
    "services": "Veterinária • Consultas • Vacinas",
    "distance": "9,2 km",
    "time": "🚗 20 min",
    "badge": "Aberto até 19h",
    "icon": "🐾",
    "colorClass": "orange",
    "imageClass": "image-clinic",
    "petIllustration": "🐕",
    "coords": {
      "lat": -3.76325,
      "lng": -38.58146
    },
    "openingHours": {
      "status": "Aberto até 19h",
      "badge": "Aberto até 19h",
      "weekdays": "Segunda a Sexta: 08:00 às 19:00",
      "saturday": "Sábado: 08:00 às 17:00",
      "sunday": "Domingo: 09:00 às 14:00"
    },
    "about": "A Clínica Pet Papicu Jóquei Clube é referência em cuidados de saúde animal no bairro Jóquei Clube. Nossa missão é oferecer medicina veterinária preventiva, diagnósticos precisos e atendimento humanizado com foco no bem-estar integral de cães e gatos.",
    "amenities": [
      "Estacionamento gratuito",
      "Ambiente 100% climatizado",
      "Wi-Fi para tutores",
      "Farmácia veterinária integrada"
    ],
    "servicesList": [
      {
        "name": "Consulta Clínica Geral",
        "description": "Avaliação física completa, peso, ausculta cardiopulmonar e orientações preventivas.",
        "duration": "40 min",
        "price": "R$ 130,00"
      },
      {
        "name": "Vacinação V10 Importada",
        "description": "Imunização múltipla canina contra cinomose, parvovirose, coronavirose e leptospirose.",
        "duration": "20 min",
        "price": "R$ 95,00"
      },
      {
        "name": "Vacina Antirrábica",
        "description": "Prevenção contra a raiva animal com emissão de atestado e selo oficial.",
        "duration": "15 min",
        "price": "R$ 65,00"
      },
      {
        "name": "Exame de Sangue (Hemograma Completo)",
        "description": "Coleta e análise laboratorial de hemácias, leucócitos e plaquetas.",
        "duration": "25 min",
        "price": "R$ 80,00"
      },
      {
        "name": "Ultrassonografia Abdominal",
        "description": "Mapeamento ultrassonográfico detalhado dos órgãos abdominais.",
        "duration": "45 min",
        "price": "R$ 180,00"
      },
      {
        "name": "Limpeza de Tártaro (Profilaxia)",
        "description": "Remoção ultrassônica de cálculo dental com monitoramento anestésico.",
        "duration": "1h 30 min",
        "price": "R$ 380,00"
      }
    ],
    "productsList": [
      {
        "name": "Antipulgas NexGard Spectra (7,5 a 15kg)",
        "category": "Farmácia",
        "price": "R$ 98,90",
        "tag": "Mais Vendido",
        "icon": "💊"
      },
      {
        "name": "Vermífugo Drontal Plus Cães 10kg",
        "category": "Farmácia",
        "price": "R$ 54,00",
        "tag": "Essencial",
        "icon": "💊"
      },
      {
        "name": "Ração Royal Canin Veterinary Diet Gastrointestinal 2kg",
        "category": "Medicamentosa",
        "price": "R$ 178,50",
        "tag": "Prescrição",
        "icon": "🥩"
      },
      {
        "name": "Suplemento Ômega 3 Dog & Cat 60 Cápsulas",
        "category": "Vitaminas",
        "price": "R$ 72,00",
        "tag": "Saúde",
        "icon": "✨"
      }
    ],
    "reviews": [
      {
        "author": "Rodrigo Mendonça",
        "pet": "Bob (Vira-lata)",
        "rating": 5,
        "date": "Há 3 semanas",
        "comment": "Sempre compro a ração e faço as vacinas aqui. Atendimento atencioso pelo WhatsApp e delivery rápido!"
      },
      {
        "author": "Mariana Silva",
        "pet": "Pipoca (Shih Tzu)",
        "rating": 5,
        "date": "Há 2 dias",
        "comment": "Excelente atendimento! O carinho e a atenção com o Pipoca foram impecáveis. Recomendo de olhos fechados."
      }
    ]
  }
];
