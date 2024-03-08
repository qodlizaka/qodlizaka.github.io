import './bootstrap';

import 'flowbite';

import Alpine from 'alpinejs'

import Intersect from '@alpinejs/intersect'

import '/resources/js/fontawesome/all.min.js'

Alpine.plugin(Intersect)

Alpine.start()

window.Alpine = Alpine
