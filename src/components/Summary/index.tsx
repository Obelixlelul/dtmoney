import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useContext } from "react";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary(){
    
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += Number(transaction.amount);
            acc.total += Number(transaction.amount);
        } else {
            acc.withdraws += Number(transaction.amount);
            acc.total -= Number(transaction.amount);
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    });
    

    return (
        <Container>
            
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outImg} alt="" />
                </header>
                <strong>
                    -{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.withdraws)}
                </strong>
            </div>

            <div className="hightlight-background"> 
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}