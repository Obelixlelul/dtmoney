import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from "./styles";
import { useTransactions } from '../../hooks/useTransactions';

export function Summary(){
    
    const {transactions} = useTransactions();

    const sumary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
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
                    <img src={incomeImg} alt="incomes" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="outcome" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.total)}
                </strong>
            </div>
        </Container>
    )
} 

function TransactionContext(TransactionContext: any) {
    throw new Error('Function not implemented.');
}
