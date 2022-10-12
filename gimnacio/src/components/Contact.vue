import { library } from '@fortawesome/fontawesome-svg-core'
import { facebook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(facebook);

<template>
    <div class="px-14 flex flex-row justify-between w-full">
      <h3 class="font-bold text-3xl text-center text-yellow-400">Contacto</h3>
    </div>
    <div id="contacto" class="px-14 h-full w-full flex flex-row">
      <div class="w-2/3 aspect-video">
        <iframe class="min-w-full min-h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101535.27318911749!2d-59.21274230872767!3d-37.31936568828566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f9b2733946f%3A0xceef2c76899c202d!2sTandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1665278757121!5m2!1ses!2sar" style="border:0;" allow="fullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="w-1/3 px-6 flex flex-col justify-center">
        <ul>
            <li><a href=""><span class="material-symbols-outlined">
                              perm_phone_msg
                              </span>
                              +54 9 249 4000000</a></li>
            <li><a href="mailto:"><span class="material-symbols-outlined">
                                      mail
                                      </span>
                                      mail.example@gmail.com</a></li>
            <li><a href=""><span class="material-symbols-outlined">
                            location_on
                            </span>
                            Calle 123, Tandil, Buenos Aires, Argentina</a></li>
            <li><span class="material-symbols-outlined">
                  browse_gallery
                  </span> 
                  Horario: Lunes a Viernes de 08:00 a 19:00 y Sábados de 08:00 a 12:00</li>
            <li>
                <a class="px-1 text-xl" href=""><font-awesome-icon :icon="['fa-brands','fa-facebook']" /></a>
                <a class="px-1 text-xl" href=""><font-awesome-icon :icon="['fa-brands','fa-instagram']" /></a>
                <a class="px-1 text-xl" href=""><font-awesome-icon :icon="['fa-brands','fa-twitter']" /></a>
                <a class="px-1 text-xl" href=""><font-awesome-icon :icon="['fa-brands','fa-tiktok']" /></a>
            </li>
        </ul>
      </div>
    </div>
</template>