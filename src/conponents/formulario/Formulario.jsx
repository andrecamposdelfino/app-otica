// config hooks
import { useState } from "react"

// config imports
import supabase from "../../supabase/supabaseClient"

// config css
import style from "./formulario.module.css"
export default function Formulario() {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [status, setStatus] = useState('Ativo')
    const [endereco, setEndereco] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [telefone, setTelefone] = useState('')
    const [observacao, setObservacao] = useState('')
    const [dados, setDados] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const cliente = { nome, cpf, dataNascimento, status, endereco, numero, bairro, telefone, observacao }
        salvarCliente(cliente)

        setNome('')
        setCpf('')
        setDataNascimento('')
        setStatus('Ativo')
        setEndereco('')
        setEndereco('')
        setNumero('')
        setBairro('')
        setTelefone('')
        setObservacao('')
        setDados('')
    }

    async function salvarCliente(cliente) {

        const { data, error } = await supabase.from('clientes').insert([cliente]).select()
        
        setDados(data)

        if (error) {
            alert('Ocorreu um erro ao salvar o cliente', error)
            return null
        }

        console.log('Cliente salvo com sucesso : ', data);
        return data

    }

    return (
        <>
        {dados ? <p className={style.message}>Cliente cadastrado...</p> : <p></p>}
        
        
        <form onSubmit={handleSubmit} className={style.formcontrol}>

            <h1>Novo cliente</h1>

            <div className={style.organization}>
                <div className={style.formgroup}>
                    <label>Nome</label>
                    <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>

                <div className={style.formgroup}>
                    <label>Cpf</label>
                    {/* <input type="text" pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})" name="nome" value={cpf} onChange={(e) => setCpf(e.target.value)} required /> */}

                    <input type="text" name="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                </div>

                <div className={style.formgroup}>
                    <label>Data de nascimento</label>
                    <input type="date" name="datanascimento" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
                </div>

                <div className={style.formgroup}>
                    <label>Status</label>
                    <input type="text" name="status" value={status} onChange={(e) => setStatus(e.target.value)} required />
                </div>
            </div>


            <div className={style.organization}>

            <div className={style.formgroup}>
                <label>Endereço</label>
                <input type="text" name="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
            </div>

            <div className={style.formgroup}>
                <label>Numero</label>
                <input type="text" name="numero" value={numero} onChange={(e) => setNumero(e.target.value)} required />
            </div>

            <div className={style.formgroup}>
                <label>Bairro</label>
                <input type="text" name="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} required />
            </div>

            <div className={style.formgroup}>
                <label>Telefone</label>
                <input type="tel" name="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                {/* <input type="tel" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" name="nome" value={telefone} onChange={(e) => setTelefone(e.target.value)} required /> */}
            </div>

            </div>
            

            <div className={style.textarea}>
                <label>Observação</label>
                <textarea name="observacao" value={observacao} onChange={(e) => setObservacao(e.target.value)} cols="90" rows="10"></textarea>
            </div>

            <button className={style.button}>Adicionar</button>

            

        </form>
        </>
    )
}