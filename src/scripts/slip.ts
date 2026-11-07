// Enquiry slip: tick items, add quantities, send by WhatsApp or email.
// Progressive enhancement only: without JS every row keeps its own mailto link.
import { EMAIL_SALES, mailto, whatsapp } from '../config';

type Slip = Record<string, { n: string; q: string }>;
const KEY = 'mi-slip';
let slip: Slip = {};
try { slip = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { slip = {}; }
const $$ = <T extends Element>(s: string) => document.querySelectorAll<T>(s);

function render() {
  const items = Object.entries(slip);
  const lines = items.map(([ref, i], k) => `${k + 1}. ${i.n} (${ref}) x ${i.q || '?'}`).join('\n');
  const msg = `Hello Multiple Industries, please quote for:\n${lines || '(items)'}\n\nName:\nDelivery location:`;
  $$('[data-slip-count]').forEach((e) => (e.textContent = String(items.length)));
  $$('[data-slip-word]').forEach((e) => (e.textContent = items.length === 1 ? 'item' : 'items'));
  $$<HTMLAnchorElement>('[data-slip-wa]').forEach((a) => (a.href = whatsapp(msg)));
  $$<HTMLAnchorElement>('[data-slip-mail]').forEach((a) => (a.href = mailto(EMAIL_SALES, 'Quotation request (enquiry slip)', msg)));
  $$<HTMLTextAreaElement>('[data-slip-body]').forEach((t) => { if (items.length) t.value = msg; });
  $$('[data-slip-list]').forEach((ul) => {
    ul.replaceChildren(...items.map(([ref, i]) => Object.assign(document.createElement('li'), { textContent: `${ref}  ${i.n}  x ${i.q || '?'}` })));
    ul.toggleAttribute('hidden', !items.length);
  });
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(slip)); } catch { /* storage blocked */ } render(); }

$$<HTMLElement>('[data-item]').forEach((row) => {
  const ref = row.dataset.item!, name = row.dataset.name!;
  const cb = row.querySelector<HTMLInputElement>('input[type=checkbox]')!, q = row.querySelector<HTMLInputElement>('input[type=number]')!;
  if (slip[ref]) { cb.checked = true; q.value = slip[ref].q; }
  const update = () => { if (cb.checked) slip[ref] = { n: name, q: q.value }; else delete slip[ref]; save(); };
  cb.addEventListener('change', update);
  q.addEventListener('input', () => { cb.checked = q.value !== '' && q.value !== '0'; update(); });
});
$$('[data-slip-clear]').forEach((b) => b.addEventListener('click', () => {
  slip = {}; $$<HTMLInputElement>('[data-item] input').forEach((i) => (i.type === 'checkbox' ? (i.checked = false) : (i.value = ''))); save();
}));
$$<HTMLFormElement>('form[action^="mailto:"]').forEach((f) => f.addEventListener('submit', (e) => {
  e.preventDefault(); const d = new FormData(f); location.href = mailto(EMAIL_SALES, String(d.get('subject')), String(d.get('body')));
}));
render();
