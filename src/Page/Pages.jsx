import React from 'react';
import {Link} from 'react-router-dom';
import './style.Pages.css';
import lifi from '../images/lifi.png';
import theBiggestPrintedBuildingWalls from '../images/biggest-printed-building-walls.jpeg';
import platooning from '../images/platooning.jpeg';
import oceanBarriers from '../images/plastic-ocean-barriers.png';

function navigation(nav) {
    const navigation = nav;

    const jsxlinks = [];
    
    navigation.map(route => {
        return jsxlinks.push(
                <li className="link-to">
                    <Link
                        to={"/" + route.to}
                        className="link-to"
                        key={jsxlinks.length}
                    >
                        {route.text}
                    </Link>
                </li>
            )
        }
    );

    if (jsxlinks.length > 1) {
        return (
            <nav className="navigation">
                <ul>
                    {jsxlinks}
                </ul>
            </nav>
        )
    } else  {
        return (
            <nav className="navigation">
                <ul className="the-only-one">
                    {jsxlinks}
                </ul>
            </nav>
        )
    }
}

class Slide6 extends React.Component {
    constructor() {
        super();
        window.onkeyup = function(e) {
            if (e.key === 'ArrowLeft') {
                return this.props.history.push('/slide5');
            }
        }.bind(this);
    }
    render() {
        return (
            <div className="slide6 slide">
                <div className="content">
                    <div className="container">
                        <p className="text">
                            Как итог, хочу сказать, что сейчас человечество максимально пытается как-то
                            упростить свою жизнь. И у этого есть две стороны:<br />
                            Положительная сторона: <br />
                            Довольно большое количество людей сейчас стремятся войти в сферу IT
                            и я считаю, что это очень хорошо, потому что эта сфера развивает логику,
                            ты учишься решать проблемы, поставленные тебе задачи и так далее.
                            Отрицательная: Есть люди, которые стремятся к совершенству, а есть те,
                            кто любит жить на всём готовом и им не надо ничего делать, то есть, они
                            живут себе и их устраивает своё развитие(на каком уровне оно ни было),
                            не хотят улучшить качество своей жизни и т.д.
                            <br />
                            Сейчас мир технологий и кто, чем хочет заниматься – он сможет этим заниматься,
                            потому что есть интернет, в котором невероятное количество полезной
                            информации.
                        </p>
                        <h2>Спасибо за внимание!</h2>
                    </div>
                </div>
                {navigation(
                    [
                        {
                            to: 'slide5',
                            text: 'Slide 5'
                        }
                    ]
                )}
            </div>
        )
    }
}

class Slide5 extends React.Component {
    constructor() {
        super();
        this.nextSlide = this.nextSlide.bind(this);
        window.onkeyup = function(e) {
            if (e.key === 'ArrowLeft') {
                return this.props.history.push('/slide4');
            } else if (e.key === 'ArrowRight') {
                return this.props.history.push('/slide6');
            }
        }.bind(this);
    }
    nextSlide() {
        return this.props.history.push('/slide6');
    }
    render() {
        return (
            <div className="slide5">
                <div className="content" onClick={this.nextSlide}>
                    <img
                        src={oceanBarriers}
                        alt="Plastic Barriers"
                        className="plastic-barriers"
                    />
                </div>
                {navigation(
                    [
                        {
                            to: 'slide4',
                            text: 'Slide 4'
                        },
                        {
                            to: 'slide6',
                            text: 'Slide 6'
                        }
                    ]
                )}
            </div>
        )
    }
}

class Slide4 extends React.Component {
    constructor() {
        super();
        this.nextSlide = this.nextSlide.bind(this);
        window.onkeyup = function(e) {
            if (e.key === 'ArrowLeft') {
                return this.props.history.push('/slide3');
            } else if (e.key === 'ArrowRight') {
                return this.props.history.push('/slide5');
            }
        }.bind(this);
    }
    nextSlide() {
        return this.props.history.push('/slide5');
    }
    render() {
        return (
            <div className="slide4 slide">
                <div className="content" onClick={this.nextSlide}>
                    <div className="container">
                        <h2>Plastic Ocean Barriers</h2>
                        <div className="wrap">
                            <div className="beginning">
                                <p className="text">"Plastic Ocean Barriers" - барьеры, которые защищают воду от пластика</p>
                                <p className="text">
                                    На экране, который не даёт проплыть мусору есть передатчики, по которым, через спутники можно определить месторасположение того или иного барьера.
                                </p>
                            </div>
                            <div className="end">
                                <p className="text">
                                    Они спасают наши всемирные океаны от людей, которые просто выбрасывают мусор в воду и из-за этого гибнет от 600тыс до 800тыс тонн рыбы ежегодно.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {navigation(
                    [
                        {
                            to: 'slide3',
                            text: 'Slide 3'
                        },
                        {
                            to: 'slide5',
                            text: 'Slide 5'
                        }
                    ]
                )}
            </div>
        )
    }
}

class Slide3 extends React.Component {
    constructor() {
        super();
        this.nextSlide = this.nextSlide.bind(this);
        window.onkeyup = function(e) {
            if (e.key === 'ArrowLeft') {
                return this.props.history.push('/slide2');
            } else if (e.key === 'ArrowRight') {
                return this.props.history.push('/slide4');
            }
        }.bind(this);
    }
    nextSlide() {
        return this.props.history.push('/slide4');
    }
    render() {
        return (
            <div className="slide3 slide">
                <div className="content" onClick={this.nextSlide}>
                    <div className="container">
                        <h2>Platooning</h2>
                        <div className="beginning">
                            <p className="text">
                                "Platooning" - не менее интересная технология, чем автоматизация постройки домов. Слово "platooning" означает беспилотное вождение грурзовых транспортов.
                            </p>
                        </div>
                        <div className="end">
                            <img
                                src={platooning}
                                alt="Platooning"
                                className="platooning"
                            />
                            <p className="text">
                                Это позволяет реагировать на какие-то действия на дороге быстрее, чем это может сделать обычный человек.
                            </p>
                        </div>
                    </div>
                </div>
                {navigation(
                    [
                        {
                            to: 'slide2',
                            text: 'Slide 2'
                        },
                        {
                            to: 'slide4',
                            text: 'Slide 4'
                        }
                    ]
                )}
            </div>
        )
    }
}

class Slide2 extends React.Component {
    constructor() {
        super();
        this.nextSlide = this.nextSlide.bind(this);
        window.onkeyup = function(e) {
            if (e.key === 'ArrowLeft') {
                return this.props.history.push('/slide1');
            } else if (e.key === 'ArrowRight') {
                return this.props.history.push('/slide3');
            }
        }.bind(this);
    }
    nextSlide() {
        return this.props.history.push('/slide3');
    }
    render() {
        return (
            <div className="slide2 slide">
                <div className="content" onClick={this.nextSlide}>
                    <div className="container">
                        <h2>Autonomous Architecture</h2>
                        <div className="wrap">
                            <div className="beginning">
                                <p className="text">
                                    Это слово в Английском означает новую эру технологий, которые абсолютно полностью автоматизируют физический человеческий труд. Одним из таких примеров является автоматизация постройки домов, который ещё называют: "printed buildings", что означает: дома, которые, как будто, напечатали на принтере.
                                </p>
                            </div>
                            <div className="end">
                                <img
                                    src={theBiggestPrintedBuildingWalls}
                                    alt="Platooning"
                                    className="walls"
                                />
                                <p className="text">
                                    Эра таких технологий ещё называется “Индустрия 4.0”. Она подразумевает в себе максимальное внедрение информационных технологий в промышленность.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {navigation(
                    [
                        {
                            to: 'slide1',
                            text: 'Slide 1'
                        },
                        {
                            to: 'slide3',
                            text: 'Slide 3'
                        }
                    ]
                )}
            </div>
        )
    }
}

class Slide1 extends React.Component {
    constructor() {
        super();
        this.nextSlide = this.nextSlide.bind(this);
        window.onkeyup = function(e) {
            if (e.key === 'ArrowLeft') {
                return this.props.history.push('/introduction');
            } else if (e.key === 'ArrowRight') {
                return this.props.history.push('/slide2');
            }
        }.bind(this);
    }
    nextSlide() {
        return this.props.history.push('/slide2');
    }
    render() {
        return (
            <div className="slide1 slide">
                <div className="content" onClick={this.nextSlide}>
                    <div className="container">
                        <h2>LI-FI</h2>
                        <div className="beginning">
                            <img src={lifi} className="li-fi" alt="LI-FI"/>
                            <p className="text">"LI-FI" - это относительно новая технология, которая позваляет нам трансформировать электричество в невероятно быстрый поток данных. </p>
                        </div>
                        <div className="end">
                            <p className="text">"LI-FI" примерно в 100 раз быстрее передаёт данные, чем WI-FI. Но у него есть и минусы: без хорошего освещения или от солнца "LI-FI" работать не будет, потому что он работает только от светодиодных ламп.</p>
                        </div>
                    </div>
                </div>
                {navigation(
                    [
                        {
                            to: 'introduction',
                            text: 'Back to the introduction'
                        },
                        {
                            to: 'slide2',
                            text: 'Slide 2'
                        }
                    ]
                )}
            </div>
        )
    }
}

class Introduction extends React.Component {
    constructor() {
        super();
        this.nextSlide = this.nextSlide.bind(this);
        window.onkeyup = function(e) {
            if (e.key === 'ArrowRight') {
                return this.props.history.push('/slide1');
            }
            console.log(e);
        }.bind(this);
    }
    nextSlide() {
        return this.props.history.push('/slide1');
    }
    render() {
        return (
            <div className="introduction slide">
                <div className="content" onClick={this.nextSlide}>
                    <div className="container">
                        <h1 className="topic">
                            Презентация на тему:
                            <br />
                            Слова о новых технологиях
                        </h1>
                        <div className="creators">
                            <span
                                className="max creator"
                            >
                                Автор: Салий Максим, 9"Г"
                            </span>
                            <span
                                className="a-beautiful-teacher creator"
                            >
                                Научный руководитель: Брянцева Анна Валерьевна
                            </span>
                        </div>
                    </div>
                </div>
                {navigation(
                    [
                        {
                            to: 'slide1',
                            text: 'Slide 1'
                        }
                    ]
                )}
            </div>
        )
    }
}

export {Introduction, Slide1, Slide2, Slide3, Slide4, Slide5, Slide6};