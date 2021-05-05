import { memo, useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  console.log("Se render Header");
  return <div>Header</div>;
};
const HeaderMemo = memo(Header);

const Body = ({ state }) => {
  console.log("Se render Body");
  return <div>Body, el valor actual es: {state}</div>;
};
const BodyMemo = memo(Body, (prevProps, nextProps) => {
  return prevProps.state === nextProps.state;
});

const Footer = () => {
  console.log("Se render Footer");
  return <div>Footer</div>;
};
const FooterMemo = memo(Footer);

const ListComponent = ({ name, age }) => {
  console.log("RENDER LIST-COMPONENT");
  return (
    <div>
      Mi nombre es {name} y tengo {age} años de edad
    </div>
  );
};
const ListComponentMemo = memo(ListComponent);

const randomName = ["Pedro", "Maria", "Angel", "J Carlos"];

const _array = [
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
  {
    name: "Pedro",
    age: 21,
  },
  {
    name: "Jose",
    age: 24,
  },
  {
    name: "Daniela",
    age: 30,
  },
  {
    name: "J Carlos",
    age: 22,
  },
  {
    name: "Angel",
    age: 32,
  },
];

const SecondFooter = () => {
  console.log("Se render SecondFooter");
  const [nombre, setName] = useState("INITIAL VALUE");

  useEffect(() => {
    console.log("SE RENDER POR INITIAL STATE Y SE MONTÓ EL COMPONENTE");
    return () => {
      console.log("SE DESMONTÓ EL COMPONENTE, Y AQUÍ PUEDES HACER LO QUE QUIERAS :D");
    };
  }, []);

  const handleRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setName(randomName[randomNumber]);
  };

  return (
    <div>
      <p>Footer, tiene el valor de {nombre}</p>
      <button onClick={handleRandom}>Cambiar nombre</button>
    </div>
  );
};

export default function Home() {
  const router = useRouter();
  const [state, setState] = useState(0);
  const [name, setName] = useState("Pedro");
  const superFuncionArrechisima = useMemo(() => Math.floor(Math.random() * 4), [name]);

  console.log(superFuncionArrechisima, "SE EJECUTÓ LA FUNCION SUPER ARRECHISIMA");

  const SecondFooterCallback = useCallback((props) => SecondFooter(props), [state]);

  const handleClick = () => {
    setState(state + 1);
  };

  const handleRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setName(randomName[randomNumber]);
  };

  const handleRoute = () => {
    router.push("/otherPage");
  };

  return (
    <>
      <h1>
        Hola, me llamo {name} y el valor del estado State es: {state}
      </h1>
      <button onClick={handleClick}>Aumentar un valor</button>
      <button onClick={handleRandom}>Cambiar nombre</button>
      <button onClick={handleRoute}>Ir para el infinito y mas allá</button>
      <Link href="/otherPage">
        <a>ME VOY DE ESTA VAINA</a>
      </Link>
      <SecondFooterCallback />
      <HeaderMemo />
      <BodyMemo state={state} name={name} />
      <FooterMemo />
      {_array.map((students, key) => (
        <ListComponentMemo key={key} {...students} />
      ))}
    </>
  );
}
