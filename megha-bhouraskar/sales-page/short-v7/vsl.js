/* =============================================================================
   VSL.JS — the click-to-play facade for the shipping pages

   Lifted out of heroes.js, which was a review harness: it also carried a variant
   pill, keyboard paging between stacked heroes, and a ?clean=1 switch. None of
   that belongs on a page a stranger loads, so this file keeps one job.

   THE JOB
   Build the YouTube iframe ON CLICK and never before. The audience is a phone in
   India on a middling connection; a cold embed is roughly half a megabyte of
   JavaScript before anything paints, and a talking-head VSL is sound-on by
   definition, so autoplay was never on the table.

   If `data-video` is empty the control says what will be there instead of doing
   nothing, because a dead button is worse than an honest message.

   Loads alongside system.js, which owns the reveal engine. No dependencies.
   ============================================================================= */
(function () {
  'use strict';

  var doc = document;

  doc.addEventListener('click', function (ev) {
    var btn = ev.target.closest ? ev.target.closest('.vsl-btn') : null;
    if (!btn) return;

    var fig = btn.closest('.vsl');
    if (!fig) return;

    /* Already playing. Without this a second click stacks a second iframe
       behind the first and both audio tracks run. */
    if (fig.querySelector('iframe')) return;

    var id = fig.getAttribute('data-video');

    if (!id) {
      fig.classList.toggle('is-pending');
      return;
    }

    var frame = doc.createElement('iframe');
    frame.src = 'https://www.youtube-nocookie.com/embed/' + id +
                '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
    /* The deploy sends Referrer-Policy: no-referrer site-wide (vercel.json).
       YouTube's player verifies the embedding domain from the Referer header,
       so with no referrer it refuses to start and throws error 153, "video
       player configuration error." An element-level referrerPolicy overrides
       the document default for this request only: YouTube gets the origin it
       needs, no path is leaked, and every other request on the site keeps
       sending nothing. Do not "fix" this by loosening the header globally. */
    frame.referrerPolicy = 'origin';

    frame.title = 'Megha Bhouraskar introduces the course';
    frame.allow = 'accelerometer; autoplay; encrypted-media; picture-in-picture';
    frame.setAttribute('allowfullscreen', '');
    fig.appendChild(frame);
  });
})();
