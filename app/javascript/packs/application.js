import 'bootstrap';
import { hideNavbarTrigger } from '../components/hide_navbar_on_scroll_down';
import { makeNavitemActiveOnClick } from '../components/make_navitem_active_on_click';

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:

  hideNavbarTrigger();
  makeNavitemActiveOnClick();
});
