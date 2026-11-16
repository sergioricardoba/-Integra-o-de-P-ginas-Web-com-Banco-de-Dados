import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const baseURL = 'http://localhost:3030/livros';
function App() {
  const [livros, setLivros] = useState([]);
  const [form, setForm] = useState({ titulo: '', autor: '', preco: '' });
  const carregar = () => fetch(baseURL).then(r => r.json()).then(setLivros);
  useEffect(carregar, []);
  const incluir = e => { e.preventDefault(); fetch(baseURL, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...form, preco:Number(form.preco)}) }).then(() => { setForm({titulo:'',autor:'',preco:''}); carregar(); }); };
  const excluir = id => fetch(`${baseURL}/${id}`, { method:'DELETE' }).then(carregar);
  return <main><header><span>Acervo digital</span><h1>Livraria</h1><p>React conectado à API Express e MongoDB</p></header><section className="painel"><form onSubmit={incluir}><h2>Novo livro</h2><input required placeholder="Título" value={form.titulo} onChange={e=>setForm({...form,titulo:e.target.value})}/><input required placeholder="Autor" value={form.autor} onChange={e=>setForm({...form,autor:e.target.value})}/><input required type="number" step="0.01" min="0" placeholder="Preço" value={form.preco} onChange={e=>setForm({...form,preco:e.target.value})}/><button>Adicionar</button></form><div><h2>Livros cadastrados</h2>{livros.length===0?<p>Nenhum livro cadastrado.</p>:<ul>{livros.map(l=><li key={l._id}><div><strong>{l.titulo}</strong><small>{l.autor} · R$ {Number(l.preco).toFixed(2)}</small></div><button className="excluir" onClick={()=>excluir(l._id)}>Excluir</button></li>)}</ul>}</div></section></main>;
}
createRoot(document.getElementById('root')).render(<App />);
