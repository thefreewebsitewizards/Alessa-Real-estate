export type ProductSpec = {
  label: string
  value: string
}

export type Product = {
  id: string
  name: string
  price: number
  category: string
  description: string
  image: string
  gallery: string[]
  detailTitle?: string
  detailDescription?: string
  detailBadges?: string[]
  shippingStatus?: string
  specs?: ProductSpec[]
  relatedIds?: string[]
  team?: string
  component?: string
  landingFeatured?: boolean
  landingBadge?: string
  catalogBadge?: 'primary' | 'light' | 'neutral'
  isCatalog?: boolean
  isSoldOut?: boolean
}

export const products: Product[] = [
  {
    id: 'zeronine-frame',
    name: 'Zeronine Frame',
    detailTitle: 'ZeroNine Factory Race Frame',
    price: 499.99,
    category: 'Frames',
    description: 'The ultimate street machine. Matte black finish with reinforced gussets.',
    detailDescription:
      'Engineered for podium finishes. The ZeroNine Factory Frame features hydro-formed 6061-T6 aluminum tubing, a tapered headtube, and CNC-machined dropouts for maximum stiffness transfer. Built to withstand the torque of elite level racing.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDAHgGWj_jjgIIzcCx1rXXd8o7CI59MZGePO9Vrvr4zjh2F9guURIarF0E1Hni7wc8xxjTaI6e_ZFew6o5r7j7qGKn3FzH8BH6B0ZlAruGuugSdibKgirDXGBuxFD578kbh3_FYQjT4z8nbbzcT-yg4cv82ASYGGIfNj3PbwWWaoNWAjF2e4CX0VUyiVyxotBVYoXI3x1XeOxNlE-ZNRR-4ewutlDJxasqgVje0cDI_regtYYTc6RFaasoVvtRPRJC5BLPcaK2ZnQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvWU4HZwMV5cGszD_EtQV9a6-lqax7K402Kd3OqfUcMF1-zS8uK5jHNn1IRX7nEVmIiZex9a9wX0J6NMApbuPDO8q2MCjYLzlYkDJkK1L_jBP3O7UHOVkZ-gUTOGyJ2qocgH2zgD2-wqOVxSZxCeIXKcLGn9gUoQwWnMe6QR-NZ60QSZ9qMgolwe7uQUchxqPvCiLM4D4r0QmtrXSKjtMMomIZv5NzOeblArXIBkh8Tc9K_-eyCzwqrS-5Ai2QhrU1O1yGge4NQw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDzcXZrV9kIY6zx5jumwMcsNRAzW7dtANBUJ0hIeajfzEoH-CUfo4_Adrn0OTceXY95vyZ8RdodVFjbTSRNEsHyVrRTWGUpTl6DW2zgHqOxiCIHYAzOPV6WdiPOIKWqX7vVbrTwhK8rhqIMQ3khfzQoE6HCg3wKzezO8Jgbz4pdFAeMa-AcsU8Qj-SNMKLJjAfZCrbGN-eHrEW9gTiqG3__dyhNf_MxcimZTe1GSzT0XQlAGxHuFc029vPQco1osd3x4L2w0ExifQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBRqFPXe_XTbQM8qVbXY_Y1-c_M0glTm8HoFlIu5ZAPSwWyR3owZALGswK_yju24rXXtOwAJYbl23aoD3wuw-zqNxbdu0C8qvgKJg0mWnSVC1lK9IhfxnKPyurcXFQZmvN3fhMtQZ-IYofDAiLhfOBkzu-UciyUL36CB99Z9hO7CI7H3-KqVeKDi96LFFjrs_uqvwkhqxlwvlkrFBpn_MmnOb6KhIBUDSW6jooNiS2A7ETkhhCSqOY8688dNywArM0m0GFMAIRXOg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARxJRtmjIt_SRggflqDdLcTJ6AXkbc-xo3BMO-g2xK_3nHdMBafL-uRYQ5KvjU6-KDr9-FJiaq_N_off61A8Xs-m8OQeALq91pfosa9Vqu5r_FYYUaLOakRMInsc3_DArpJkqcUk1FhgiwbUNqtiB8SDQp_5RokPvdTw08nVNzqzyslNHgqhCgT-0y_ZCTrvRxCHVzVdfeTOOhERGXkDuQvwJLPvOxvPGP5GBDdmbHZ4GfGIKAFQwE6_MqqdI7cIxULVZIAwMjog',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD8lOP96hfDWb2iEsdCAy4hXZQrhqyOHcr7AvKfay-cxvnlCdPsmSAJN3ncAAv8t2nvD6L19XEdEfpHEpGcsIGAf0TQhpmZWt2lHsVlolAfS3o66tMwIT43L-tgciluV3IMxPga51_Ti1dyU97jX_0S7pYbOeeOByfXQXQsd90-0tTFCaZeMH6Dal7ngZ4gs1S8NgFzaZPU17hLOfXiT9N5v5r3OW_zuN-P_IcAwC28KhwelFGX3S82srD3X3MJC4tIeWBiD1-qzw',
    ],
    detailBadges: ['New Arrival', 'Free Shipping'],
    shippingStatus: 'Ships directly from warehouse',
    specs: [
      { label: 'Top Tube', value: '21.25"' },
      { label: 'Chainstay', value: '14.5" - 15.5"' },
      { label: 'Head Angle', value: '74°' },
      { label: 'Seat Angle', value: '71°' },
      { label: 'BB Height', value: '11.5"' },
      { label: 'Weight', value: '3.4 lbs' },
    ],
    relatedIds: ['stealth-carbon-fork', 'pro-85-bars', 'elite-crankset', 'powerblock-tires'],
    team: 'ZeroNine',
    component: 'Frames',
    landingFeatured: true,
    landingBadge: 'Best Seller',
    isCatalog: true,
    catalogBadge: 'primary',
  },
  {
    id: 'aggro-racing-jersey',
    name: 'Aggro Racing Jersey',
    price: 59,
    category: 'Apparel',
    description: 'Breathable mesh fabric with moisture-wicking technology. Race fit.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVMEcbP4-coaFEmRCgxViVC-YCwnCASRSj7OqVh1V2q0Xvg7CYlF7tsbR1qcZKJoa0s_hMGwIA321j4cvt_taCIfvmHu7lQCcpIMd0Tjd6QNe83xMEh2Jqnx6Ld_RcAiplFBIeIYIP1aBifIDc5feH8y3yMDkKXJeLB7ziUogeo29dIBt-ezEuazor-5Qzyq86Ol3fitDTmxAgw04AV804pYlTip31FbZEvIr4csigSDH_rat3T5RpKvUv9ALzWGzI8W88qLrw8w',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVMEcbP4-coaFEmRCgxViVC-YCwnCASRSj7OqVh1V2q0Xvg7CYlF7tsbR1qcZKJoa0s_hMGwIA321j4cvt_taCIfvmHu7lQCcpIMd0Tjd6QNe83xMEh2Jqnx6Ld_RcAiplFBIeIYIP1aBifIDc5feH8y3yMDkKXJeLB7ziUogeo29dIBt-ezEuazor-5Qzyq86Ol3fitDTmxAgw04AV804pYlTip31FbZEvIr4csigSDH_rat3T5RpKvUv9ALzWGzI8W88qLrw8w',
    ],
    team: 'Aggro Factory',
    component: 'Apparel',
    landingFeatured: true,
    isCatalog: true,
  },
  {
    id: 'pro-grip-sets',
    name: 'Pro Grip Sets',
    price: 25,
    category: 'Accessories',
    description: 'Soft compound rubber with classic waffle pattern for maximum control.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9gp5gzI1vk1hGu2mJj0WnruK5rHPylvtcKnt_Jv7JJLSEryeV4USS49tv-0oAtEFZsKEc8OXh16xH4T8vRRXoQvecTX0OcRAyRGyLeVhCgId94ckm3JCL4D4rm-MRCQbTAdGpiySYcPMfKhY1MccbHOcYF9GGRp8fqFWkHgNzRIwTFd66xAvIMpxbG2riPKj8mkobM18W8iYjBqIrgiQxN_N7ZiMh_cY_k6_PQnDEqYwNFEvreMe1UuYJRDOgyYroWGY4sUbV1A',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9gp5gzI1vk1hGu2mJj0WnruK5rHPylvtcKnt_Jv7JJLSEryeV4USS49tv-0oAtEFZsKEc8OXh16xH4T8vRRXoQvecTX0OcRAyRGyLeVhCgId94ckm3JCL4D4rm-MRCQbTAdGpiySYcPMfKhY1MccbHOcYF9GGRp8fqFWkHgNzRIwTFd66xAvIMpxbG2riPKj8mkobM18W8iYjBqIrgiQxN_N7ZiMh_cY_k6_PQnDEqYwNFEvreMe1UuYJRDOgyYroWGY4sUbV1A',
    ],
    team: 'Aggro Factory',
    component: 'Bars',
    landingFeatured: true,
    isCatalog: true,
  },
  {
    id: 'mach-1-carbon-xl',
    name: 'Mach 1 Carbon XL',
    price: 699,
    category: 'Frames',
    description: 'Ultra-light carbon frame tuned for pro gate starts and sprint lines.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAi6nUuLJZPD6FpYpRXFPM3jYJxrMPhql4lqxLOhh5WIxmQ4CYBopWA1_EeWJpq30hqrx6bPI9uuptr7g-u1MxtI87irCObQ1oLi3BB94H-is729IOG3NzHFeheQB6TmYzKXX8ojOtH5N5PUcBzTaQcMiXLu78qCb66SzvsBa2UIco1TNxnB7WoMP4-mDsZmRif_h_rIKvyu4YuBOi6F66aRPHIbf5pl4Bh3lBVcr4evWVqH_rBFmsDPeIE3QV8mmWftRAclkrUNA',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAi6nUuLJZPD6FpYpRXFPM3jYJxrMPhql4lqxLOhh5WIxmQ4CYBopWA1_EeWJpq30hqrx6bPI9uuptr7g-u1MxtI87irCObQ1oLi3BB94H-is729IOG3NzHFeheQB6TmYzKXX8ojOtH5N5PUcBzTaQcMiXLu78qCb66SzvsBa2UIco1TNxnB7WoMP4-mDsZmRif_h_rIKvyu4YuBOi6F66aRPHIbf5pl4Bh3lBVcr4evWVqH_rBFmsDPeIE3QV8mmWftRAclkrUNA',
    ],
    team: 'Supercross',
    component: 'Frames',
    isCatalog: true,
    catalogBadge: 'primary',
  },
  {
    id: 'vandal-pro-bars-85',
    name: 'Vandal Pro Bars 8.5"',
    price: 89,
    category: 'Control',
    description: 'Heat-treated bars built for hard landings and clean spins.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMBAvtYNDXl2xycGVgRBQMqetgnA3OHH3as-jrTRO8JZzA8bxwiwjF_uU_oEj5zjvFfJeyaL_xi1nCU4GMEs5_CjzIwkN9n2pW4nd5hJYrv6e1ryCV8qJqsv16wXQTJo3JwlcZD1Sj3TBmyzefjrkaFiZIKHYZrAiarXogSixPsBGTCk_EC7tp00A1hdq2YZuIerQhffd2RqThYVdxVG4VJGLcr71hUUPkABNQYRnD1KPXRb4V3m0ujD4qp7tOO1sQskeZLDFbUw',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMBAvtYNDXl2xycGVgRBQMqetgnA3OHH3as-jrTRO8JZzA8bxwiwjF_uU_oEj5zjvFfJeyaL_xi1nCU4GMEs5_CjzIwkN9n2pW4nd5hJYrv6e1ryCV8qJqsv16wXQTJo3JwlcZD1Sj3TBmyzefjrkaFiZIKHYZrAiarXogSixPsBGTCk_EC7tp00A1hdq2YZuIerQhffd2RqThYVdxVG4VJGLcr71hUUPkABNQYRnD1KPXRb4V3m0ujD4qp7tOO1sQskeZLDFbUw',
    ],
    team: 'Aggro Factory',
    component: 'Bars',
    isCatalog: true,
  },
  {
    id: 'sector-9-sprocket',
    name: 'Sector 9 Sprocket',
    price: 45,
    category: 'Drivetrain',
    description: 'CNC-machined sprocket with race-day durability and precision.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCul7AGZ4hr_8n3X4N01NrtLeWT_VYYhhF4glAtCMhgQqcTtYIV_TJQEHBVJ9mrGGi7XvTo6Z3idyeP76ogWb_bkSfdp1N2NUfW2I0PqGrjJe0j68ywsO3X2Ry0GS8JcIjZ7iEbelwCQxG0ZeRP9eVklpLGrwrEQpdk4BW6ziXTJI1iIdot_1GllYpnB0vHfEcYAPoDK49om0BiC1G2LtYspvo74gRjdLPOyMnzboJb8ga22FrFuy2elkW4CA1Dy8FuwLXFiHuXqQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCul7AGZ4hr_8n3X4N01NrtLeWT_VYYhhF4glAtCMhgQqcTtYIV_TJQEHBVJ9mrGGi7XvTo6Z3idyeP76ogWb_bkSfdp1N2NUfW2I0PqGrjJe0j68ywsO3X2Ry0GS8JcIjZ7iEbelwCQxG0ZeRP9eVklpLGrwrEQpdk4BW6ziXTJI1iIdot_1GllYpnB0vHfEcYAPoDK49om0BiC1G2LtYspvo74gRjdLPOyMnzboJb8ga22FrFuy2elkW4CA1Dy8FuwLXFiHuXqQ',
    ],
    team: 'ZeroNine',
    component: 'Cranks',
    isCatalog: true,
    catalogBadge: 'light',
  },
  {
    id: 'turbine-wheelset-20',
    name: 'Turbine Wheelset 20"',
    price: 349,
    category: 'Wheels',
    description: 'Race-tuned wheelset with sealed hubs and reinforced rims.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-3vMP9oJ9nTHR0FUWE1viU3D0maUSKLzoj0T6iB_SwQv1ZxUhUoqnQQ_b6pJnIUcup9I2Falmka3VVisf2W63wbHkaMn8s8opIGIcObqg8UbNkVdf3sjtJoOkmuMBVuyntMnHSyU9Z_8huM4FNopPkxHg3gYN-ZblV8e5qXE_GNxGe722Jsi3O5JBENx7Hh4j_76BAdASkts2KYI8Ks33qbsGEWsNyyEpIVEG0_8YaRjUB-LsDXP4AaR04iKMlxaoAZs5m688bg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-3vMP9oJ9nTHR0FUWE1viU3D0maUSKLzoj0T6iB_SwQv1ZxUhUoqnQQ_b6pJnIUcup9I2Falmka3VVisf2W63wbHkaMn8s8opIGIcObqg8UbNkVdf3sjtJoOkmuMBVuyntMnHSyU9Z_8huM4FNopPkxHg3gYN-ZblV8e5qXE_GNxGe722Jsi3O5JBENx7Hh4j_76BAdASkts2KYI8Ks33qbsGEWsNyyEpIVEG0_8YaRjUB-LsDXP4AaR04iKMlxaoAZs5m688bg',
    ],
    team: 'Supercross',
    component: 'Wheels',
    isCatalog: true,
  },
  {
    id: 'grip-lock-pedals',
    name: 'Grip Lock Pedals',
    price: 65,
    category: 'Pedals',
    description: 'Low-profile pedal design with aggressive traction pins.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCFrp0IaRwW2Nmlik__ISq9lMuJE3gcY6zWXPXmjGXSJFSizKPDe4pCsHkmVPWdEhc4VSN02EohtI7S4l8usmfStMNigB8KdqVXAAy1aGDnnsMWIJExDAcmA3JiGbR_AAnqeo8ZAh_N6xskHgeeVpgQULzDzv-SWOloDaqEAC8PdedEO0qXpHuUFbqLDSswGCbiI4sd0914KJl2rTt5Hz5xmI7IE5Tk_RTs4J6_VLccnNlxZIko2ZL3zjsLEGQZ7egD-iT9L1kcpw',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCFrp0IaRwW2Nmlik__ISq9lMuJE3gcY6zWXPXmjGXSJFSizKPDe4pCsHkmVPWdEhc4VSN02EohtI7S4l8usmfStMNigB8KdqVXAAy1aGDnnsMWIJExDAcmA3JiGbR_AAnqeo8ZAh_N6xskHgeeVpgQULzDzv-SWOloDaqEAC8PdedEO0qXpHuUFbqLDSswGCbiI4sd0914KJl2rTt5Hz5xmI7IE5Tk_RTs4J6_VLccnNlxZIko2ZL3zjsLEGQZ7egD-iT9L1kcpw',
    ],
    team: 'Aggro Factory',
    component: 'Cranks',
    isCatalog: true,
  },
  {
    id: 'team-jersey-24',
    name: "Team Jersey '24",
    price: 55,
    category: 'Apparel',
    description: 'Limited team issue jersey with race-cut fit.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCVqNHq0VtT9Z-l9SJEbpcTQgjTnu7UEdd2blmlygiphnDDW1xzzsdJPFCPH_TbW3MoDAbBMHDYPqg7mgdI7_ti9TAV-Y2d5M1uIhx6LE9yUMa6DlfTBhhnTwV5Mu4nz4ZCKSdR0dK-TJStdD-eu6aJfd0FiiMX4p0yi5HdbSaTb8K7yqqg2THYblJeDI33kx4CWCss5UNYsBIWmFYTZOIjvTTcjjBYSWyds7WUT6mifvHbt9e2wfy6c4wBY_motJW96DemzN9R2g',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCVqNHq0VtT9Z-l9SJEbpcTQgjTnu7UEdd2blmlygiphnDDW1xzzsdJPFCPH_TbW3MoDAbBMHDYPqg7mgdI7_ti9TAV-Y2d5M1uIhx6LE9yUMa6DlfTBhhnTwV5Mu4nz4ZCKSdR0dK-TJStdD-eu6aJfd0FiiMX4p0yi5HdbSaTb8K7yqqg2THYblJeDI33kx4CWCss5UNYsBIWmFYTZOIjvTTcjjBYSWyds7WUT6mifvHbt9e2wfy6c4wBY_motJW96DemzN9R2g',
    ],
    team: 'Aggro Factory',
    component: 'Apparel',
    isCatalog: true,
    isSoldOut: true,
    catalogBadge: 'neutral',
  },
  {
    id: 'stealth-carbon-fork',
    name: 'Stealth Carbon Fork',
    price: 249.99,
    category: 'Forks',
    description: 'Stiff, lightweight carbon fork for razor-sharp steering response.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQO6vHbfiGPpeEcVspU046BukdRsFrRLNC_iRK3Phh_ERi4AdkjVCRuldlEQ2ZsXuZxA3WwM4TrrQpz6v7DeSrlcc_g8KiHo3qYfJBz-1pC74Zxin18gZK3uwHIPGO9P0ZTVNqWDv5hT4Z54vb8hPymMH1ewzZ-nciX7u3b-umP4hx3wPFhTnXwb2NQ3YZKjQsND7m7cD9IgbUcf5vsTAxlV_nBWfSgfNGN7BWFTvjlU8lX778MQjzeCjYb58MUKXjp_bLCl8PpQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQO6vHbfiGPpeEcVspU046BukdRsFrRLNC_iRK3Phh_ERi4AdkjVCRuldlEQ2ZsXuZxA3WwM4TrrQpz6v7DeSrlcc_g8KiHo3qYfJBz-1pC74Zxin18gZK3uwHIPGO9P0ZTVNqWDv5hT4Z54vb8hPymMH1ewzZ-nciX7u3b-umP4hx3wPFhTnXwb2NQ3YZKjQsND7m7cD9IgbUcf5vsTAxlV_nBWfSgfNGN7BWFTvjlU8lX778MQjzeCjYb58MUKXjp_bLCl8PpQ',
    ],
    team: 'ZeroNine',
    component: 'Forks',
    isCatalog: true,
  },
  {
    id: 'pro-85-bars',
    name: 'Pro 8.5" Bars',
    price: 79.99,
    category: 'Bars',
    description: 'Pro-level bars with a reinforced crossbar and race-ready rise.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLiXMCVmMtkdVPj0Nmjog7coIwWR6xLxZ_rQsA_ZLAM2zpWGJcg8KzUL9TcOcY7me9O24e32alWxQNPH_Gs5cxoBdWN2776UJvqgNWVm420VSqgz-O0sJFNmfJDgzv8zMdKuSTGfNVopZVLdc9JgRrluDCL3cpcqmy10TknE1Ux_4KZJl9adP_mUUho4QE04AjSTMxfhW3dLfQj9bVj8K6ZS2KW4xSK1gizDQKJZdIKBfLpInWpZhkL7T5noPXgGXDvasIEr1Ghw',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLiXMCVmMtkdVPj0Nmjog7coIwWR6xLxZ_rQsA_ZLAM2zpWGJcg8KzUL9TcOcY7me9O24e32alWxQNPH_Gs5cxoBdWN2776UJvqgNWVm420VSqgz-O0sJFNmfJDgzv8zMdKuSTGfNVopZVLdc9JgRrluDCL3cpcqmy10TknE1Ux_4KZJl9adP_mUUho4QE04AjSTMxfhW3dLfQj9bVj8K6ZS2KW4xSK1gizDQKJZdIKBfLpInWpZhkL7T5noPXgGXDvasIEr1Ghw',
    ],
    team: 'ZeroNine',
    component: 'Bars',
    isCatalog: true,
  },
  {
    id: 'elite-crankset',
    name: 'Elite Crankset',
    price: 189.99,
    category: 'Cranks',
    description: 'High-torque crankset built for explosive starts and street sessions.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBISvj67nhNpTqdtXzA6tqKwPovvN0hWfK9bU_tEgnkr0F0VtzPy9VqVpGIV6YkxFPjR_uPh3V1NQ-Rwd8tvMhawaKDB_n6N6ZCAree9R_7esj60G3IHFVfM0yovODxoLfx3Z_xaJPV_bTIJS3XDWMFWR7tV8kvj_t5F31MeUCmgBYV4x-bscwYllfUEaWzfCH0O7Mw8Z1mdLkeH4i5SsnXnV6cvPEwRhSOe2VqJyUPPm9GM5y--8CbHGZ42_wOVvSX7VXFLu05lw',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBISvj67nhNpTqdtXzA6tqKwPovvN0hWfK9bU_tEgnkr0F0VtzPy9VqVpGIV6YkxFPjR_uPh3V1NQ-Rwd8tvMhawaKDB_n6N6ZCAree9R_7esj60G3IHFVfM0yovODxoLfx3Z_xaJPV_bTIJS3XDWMFWR7tV8kvj_t5F31MeUCmgBYV4x-bscwYllfUEaWzfCH0O7Mw8Z1mdLkeH4i5SsnXnV6cvPEwRhSOe2VqJyUPPm9GM5y--8CbHGZ42_wOVvSX7VXFLu05lw',
    ],
    team: 'Aggro Factory',
    component: 'Cranks',
    isCatalog: true,
  },
  {
    id: 'powerblock-tires',
    name: 'PowerBlock Tires',
    price: 34.99,
    category: 'Tires',
    description: 'Fast-rolling tires with durable sidewalls and race-ready grip.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuANURcgPm_N3BTShj2_qpYUYSZxTd5YuOLMH0fZvwKdhceDoOKxufByN7FvZOblQfoknnxyqj7ejuN8SLvEFRqvhV-SmqO-4CP1XbJsj1dtqHD67cohrC2IYGx6S2aG614XpUSTf9EzghcVQ7ElJUSg1zosDcGFJFfcCSFPOZKJCjGc_qgYeFkvA6QiOnxCKGBu50eXZma3HkkVI10FLxDqq_ySh1IhQzLV6DzaViqZmoETtFssu4IAneGD7vJ9_uOZNwn5aV-Etg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuANURcgPm_N3BTShj2_qpYUYSZxTd5YuOLMH0fZvwKdhceDoOKxufByN7FvZOblQfoknnxyqj7ejuN8SLvEFRqvhV-SmqO-4CP1XbJsj1dtqHD67cohrC2IYGx6S2aG614XpUSTf9EzghcVQ7ElJUSg1zosDcGFJFfcCSFPOZKJCjGc_qgYeFkvA6QiOnxCKGBu50eXZma3HkkVI10FLxDqq_ySh1IhQzLV6DzaViqZmoETtFssu4IAneGD7vJ9_uOZNwn5aV-Etg',
    ],
    team: 'Supercross',
    component: 'Cranks',
    isCatalog: true,
  },
  {
    id: 'aggro-carbon-race-fork',
    name: 'Aggro Carbon Race Fork',
    price: 299,
    category: 'Forks',
    description: 'Carbon race fork with a stiff steering column and reinforced dropouts.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDjD9VqD1BRPvG5VTlUhc83NKSi-nQqgVPdJnYmZBUQJ_PykMppDiHxYEqIAhyjuVjCN1rnNSJyV45XagwSptTjiW1_m5_lxUzJeFqGt1wYCpbBp0dLO3bPtoqAtduPHqUTplLKtImvDhneTUmSeS6UHIvTKJ9u7cZk1ixX03Wgi1Tz3sVq4anXwzYOOZsjo9CjhXyeJXiBgh4TGa5VrUq0ETrbCrbWLsIYncZrTocNlHA4OibW-Lo5soiZJDkhPgSbUDo57IEjoQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDjD9VqD1BRPvG5VTlUhc83NKSi-nQqgVPdJnYmZBUQJ_PykMppDiHxYEqIAhyjuVjCN1rnNSJyV45XagwSptTjiW1_m5_lxUzJeFqGt1wYCpbBp0dLO3bPtoqAtduPHqUTplLKtImvDhneTUmSeS6UHIvTKJ9u7cZk1ixX03Wgi1Tz3sVq4anXwzYOOZsjo9CjhXyeJXiBgh4TGa5VrUq0ETrbCrbWLsIYncZrTocNlHA4OibW-Lo5soiZJDkhPgSbUDo57IEjoQ',
    ],
    team: 'Aggro Factory',
    component: 'Forks',
  },
  {
    id: 'pro-taper-bars-85',
    name: 'Pro Taper Bars - 8.5" Rise',
    price: 65,
    category: 'Bars',
    description: 'Classic taper bars with a smooth chrome finish.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3PNL7RyacOTSclYqDgPB9moPdRiprTKpwA2RvTmE6B_mtiXkebpj_L00JjnQ0X66_IN442L5uFVF1-yYEMzbbTwVU7Cr11KgwNjvRZd3FpEs88RvSAFPZTAjGJoavxtDUXgf55jwsJ7OzwE-RHBvl4qTKAMKbLqHwBePZsKdK3nHAIhHblrWHjKoCXxrsN6yxMCHhMcKq_XqN_ylOBTczIOBd3CNM3TTzH1FNZrHqoZsYi0z9RYA32rkN7sIQWXpNYIA-fB9jvA',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3PNL7RyacOTSclYqDgPB9moPdRiprTKpwA2RvTmE6B_mtiXkebpj_L00JjnQ0X66_IN442L5uFVF1-yYEMzbbTwVU7Cr11KgwNjvRZd3FpEs88RvSAFPZTAjGJoavxtDUXgf55jwsJ7OzwE-RHBvl4qTKAMKbLqHwBePZsKdK3nHAIhHblrWHjKoCXxrsN6yxMCHhMcKq_XqN_ylOBTczIOBd3CNM3TTzH1FNZrHqoZsYi0z9RYA32rkN7sIQWXpNYIA-fB9jvA',
    ],
    team: 'ZeroNine',
    component: 'Bars',
  },
  {
    id: 'odi-longneck-grips',
    name: 'ODI Longneck Grips',
    price: 14.95,
    category: 'Accessories',
    description: 'Classic longneck grips with a soft compound and neon pop.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCojtLX7x4AlX8nQ6Qdsf6a9cOMdD-vA6CLvyu0HH4GQO4MsL8cCkO60mRlICRHMab6dLEvaQ4MK8rC2vQtTD10GBMqS-Mr2lfG_AWtPhp1QYBjsWqkJF0VTzf_n8d258jaC62lGe1n6AwEqY5FFWVkzIsM9ASC9XsLLPHxUb8t-lCXx72ZZUrR29w2pv-QoyKuPcPW40pFTyJzstAgnLFUBhGIfvpIAtb3ettPFjrB6hUZjr9s3BOJ0oOUMSRUqFrYpRec_oE66A',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCojtLX7x4AlX8nQ6Qdsf6a9cOMdD-vA6CLvyu0HH4GQO4MsL8cCkO60mRlICRHMab6dLEvaQ4MK8rC2vQtTD10GBMqS-Mr2lfG_AWtPhp1QYBjsWqkJF0VTzf_n8d258jaC62lGe1n6AwEqY5FFWVkzIsM9ASC9XsLLPHxUb8t-lCXx72ZZUrR29w2pv-QoyKuPcPW40pFTyJzstAgnLFUBhGIfvpIAtb3ettPFjrB6hUZjr9s3BOJ0oOUMSRUqFrYpRec_oE66A',
    ],
    team: 'Aggro Factory',
    component: 'Bars',
  },
]

export const formatPrice = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(value)

export const getProductById = (id: string | undefined) => products.find((product) => product.id === id)
