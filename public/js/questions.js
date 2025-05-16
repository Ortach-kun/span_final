const quizQuestions = [
    {
        question: "1. Mi madre ______ muy simpática.",
        answers: [
            { text: "a) es", correct: true },
            { text: "b) está", correct: false },
            { text: "c) tiene", correct: false }
        ]
    },
    {
        question: "2. Nosotros ______ estudiantes de español.",
        answers: [
            { text: "a) tenemos", correct: false },
            { text: "b) somos", correct: true },
            { text: "c) están", correct: false }
        ]
    },
    {
        question: "3. ¿Tú ______ italiano?",
        answers: [
            { text: "a) tienes", correct: false },
            { text: "b) eres", correct: true },
            { text: "c) estás", correct: false }
        ]
    },
    {
        question: "4. El profesor ______ muy estricto.",
        answers: [
            { text: "a) es", correct: true },
            { text: "b) tiene", correct: false },
            { text: "c) lleva", correct: false }
        ]
    },
    {
        question: "5. Vosotros ______ altos y guapos.",
        answers: [
            { text: "a) sois", correct: true },
            { text: "b) estáis", correct: false },
            { text: "c) tenéis", correct: false }
        ]
    },
    {
        question: "6. Ellos ______ médicos.",
        answers: [
            { text: "a) son", correct: true },
            { text: "b) están", correct: false },
            { text: "c) tienen", correct: false }
        ]
    },
    {
        question: "7. ¿Quién ______ tu mejor amiga?",
        answers: [
            { text: "a) tiene", correct: false },
            { text: "b) es", correct: true },
            { text: "c) está", correct: false }
        ]
    },
    {
        question: "8. Yo ______ muy trabajadora.",
        answers: [
            { text: "a) tengo", correct: false },
            { text: "b) soy", correct: true },
            { text: "c) estoy", correct: false }
        ]
    },
    {
        question: "9. Mis padres ______ amables.",
        answers: [
            { text: "a) tienen", correct: false },
            { text: "b) son", correct: true },
            { text: "c) están", correct: false }
        ]
    },
    {
        question: "10. ¿De dónde ______ tú?",
        answers: [
            { text: "a) eres", correct: true },
            { text: "b) estás", correct: false },
            { text: "c) tienes", correct: false }
        ]
    },
    {
        question: "11. Este coche ______ alemán.",
        answers: [
            { text: "a) tiene", correct: false },
            { text: "b) es", correct: true },
            { text: "c) está", correct: false }
        ]
    },
    {
        question: "12. Marta y tú ______ responsables.",
        answers: [
            { text: "a) son", correct: false },
            { text: "b) están", correct: false },
            { text: "c) sois", correct: true }
        ]
    },
    {
        question: "13. Tú no ______ perezoso.",
        answers: [
            { text: "a) estás", correct: false },
            { text: "b) eres", correct: true },
            { text: "c) tienes", correct: false }
        ]
    },
    {
        question: "14. Yo ______ de Turquía.",
        answers: [
            { text: "a) tengo", correct: false },
            { text: "b) estoy", correct: false },
            { text: "c) soy", correct: true }
        ]
    },
    {
        question: "15. Yo ______ dos hermanos.",
        answers: [
            { text: "a) soy", correct: false },
            { text: "b) tengo", correct: true },
            { text: "c) estoy", correct: false }
        ]
    },
    {
        question: "16. ¿Tú ______ el pelo largo?",
        answers: [
            { text: "a) tienes", correct: true },
            { text: "b) eres", correct: false },
            { text: "c) llevas", correct: false }
        ]
    },
    {
        question: "17. Nosotros ______ los ojos azules.",
        answers: [
            { text: "a) somos", correct: false },
            { text: "b) tenemos", correct: true },
            { text: "c) llevamos", correct: false }
        ]
    },
    {
        question: "18. Mi abuela ______ el pelo blanco.",
        answers: [
            { text: "a) es", correct: false },
            { text: "b) tiene", correct: true },
            { text: "c) lleva", correct: false }
        ]
    },
    {
        question: "19. ¿Cuántos años ______ tu primo?",
        answers: [
            { text: "a) tiene", correct: true },
            { text: "b) es", correct: false },
            { text: "c) está", correct: false }
        ]
    },
    {
        question: "20. Ellas ______ gafas.",
        answers: [
            { text: "a) tienen", correct: true },
            { text: "b) son", correct: false },
            { text: "c) están", correct: false }
        ]
    },
    {
        question: "21. Los niños ______ mucha energía.",
        answers: [
            { text: "a) son", correct: false },
            { text: "b) tienen", correct: true },
            { text: "c) están", correct: false }
        ]
    },
    {
        question: "22. Yo ______ pecas.",
        answers: [
            { text: "a) soy", correct: false },
            { text: "b) tengo", correct: true },
            { text: "c) llevo", correct: false }
        ]
    },
    {
        question: "23. Tú ______ una sonrisa bonita.",
        answers: [
            { text: "a) tienes", correct: true },
            { text: "b) eres", correct: false },
            { text: "c) estás", correct: false }
        ]
    },
    {
        question: "24. Mis amigos ______ el pelo rizado.",
        answers: [
            { text: "a) son", correct: false },
            { text: "b) llevan", correct: false },
            { text: "c) tienen", correct: true }
        ]
    },
    {
        question: "25. Nosotros ______ frío.",
        answers: [
            { text: "a) tenemos", correct: true },
            { text: "b) somos", correct: false },
            { text: "c) llevamos", correct: false }
        ]
    },
    {
        question: "26. Laura ______ muchas amigas.",
        answers: [
            { text: "a) es", correct: false },
            { text: "b) tiene", correct: true },
            { text: "c) está", correct: false }
        ]
    },
    {
        question: "27. Yo ______ gafas de sol.",
        answers: [
            { text: "a) tengo", correct: true },
            { text: "b) soy", correct: false },
            { text: "c) llevo", correct: false }
        ]
    },
    {
        question: "28. Tú ______ barba.",
        answers: [
            { text: "a) llevas", correct: true },
            { text: "b) tienes", correct: false },
            { text: "c) eres", correct: false }
        ]
    },
    {
        question: "29. Mi hermana ______ un vestido rojo.",
        answers: [
            { text: "a) lleva", correct: true },
            { text: "b) tiene", correct: false },
            { text: "c) es", correct: false }
        ]
    },
    {
        question: "30. Nosotros ______ camisetas blancas.",
        answers: [
            { text: "a) tenemos", correct: false },
            { text: "b) somos", correct: false },
            { text: "c) llevamos", correct: true }
        ]
    },
    {
        question: "31. Ellos ______ una chaqueta azul.",
        answers: [
            { text: "a) llevan", correct: true },
            { text: "b) son", correct: false },
            { text: "c) tienen", correct: false }
        ]
    },
    {
        question: "32. Ana siempre ______ pendientes grandes.",
        answers: [
            { text: "a) es", correct: false },
            { text: "b) lleva", correct: true },
            { text: "c) tiene", correct: false }
        ]
    },
    {
        question: "33. ¿Quién ______ falda hoy?",
        answers: [
            { text: "a) lleva", correct: false },
            { text: "b) tiene", correct: true },
            { text: "c) es", correct: false }
        ]
    },
    {
        question: "34. Nosotros ______ uniformes en el colegio.",
        answers: [
            { text: "a) llevamos", correct: true },
            { text: "b) somos", correct: false },
            { text: "c) tenemos", correct: false }
        ]
    },
    {
        question: "35. Tú ______ un bolso marrón, ¿verdad?",
        answers: [
            { text: "a) llevas", correct: true },
            { text: "b) tienes", correct: false },
            { text: "c) eres", correct: false }
        ]
    },
    {
        question: "39. Yo ______ (hablar) español con mi abuela.",
        answers: [
            { text: "a) hablo", correct: true },
            { text: "b) hablas", correct: false },
            { text: "c) hablan", correct: false }
        ]
    },
    {
        question: "40. Nosotros ______ (comer) en casa todos los días.",
        answers: [
            { text: "a) como", correct: false },
            { text: "b) comemos", correct: true },
            { text: "c) comen", correct: false }
        ]
    },
    {
        question: "41. ¿Tú ______ (vivir) en Madrid?",
        answers: [
            { text: "a) vives", correct: true },
            { text: "b) vivís", correct: false },
            { text: "c) vive", correct: false }
        ]
    },
    {
        question: "42. Mi padre ______ (trabajar) en una empresa grande.",
        answers: [
            { text: "a) trabajo", correct: false },
            { text: "b) trabaja", correct: true },
            { text: "c) trabajan", correct: false }
        ]
    },
    {
        question: "43. Vosotros ______ (leer) libros de historia.",
        answers: [
            { text: "a) leen", correct: false },
            { text: "b) leéis", correct: true },
            { text: "c) leemos", correct: false }
        ]
    },
    {
        question: "44. Ellos ______ (escribir) cartas a sus amigos.",
        answers: [
            { text: "a) escribes", correct: false },
            { text: "b) escriben", correct: true },
            { text: "c) escribimos", correct: false }
        ]
    },
    {
        question: "45. Ana y yo ______ (bailar) salsa muy bien.",
        answers: [
            { text: "a) bailo", correct: false },
            { text: "b) bailamos", correct: true },
            { text: "c) bailan", correct: false }
        ]
    },
    {
        question: "46. ¿Ustedes ______ (comer) carne o pescado?",
        answers: [
            { text: "a) coméis", correct: false },
            { text: "b) comemos", correct: false },
            { text: "c) comen", correct: true }
        ]
    },
    {
        question: "47. Tú ______ (estudiar) mucho para el examen.",
        answers: [
            { text: "a) estudias", correct: true },
            { text: "b) estudia", correct: false },
            { text: "c) estudio", correct: false }
        ]
    },
    {
        question: "48. Mis amigos ______ (abrir) las ventanas por la mañana.",
        answers: [
            { text: "a) abrimos", correct: false },
            { text: "b) abren", correct: true },
            { text: "c) abres", correct: false }
        ]
    },
    {
        question: "49. Yo ______ (trabajar) en una cafetería.",
        answers: [
            { text: "a) trabajas", correct: false },
            { text: "b) trabajo", correct: true },
            { text: "c) trabajan", correct: false }
        ]
    },
    {
        question: "50. Ellos ______ (comprar) una casa nueva.",
        answers: [
            { text: "a) compramos", correct: false },
            { text: "b) compro", correct: false },
            { text: "c) compran", correct: true }
        ]
    },
    {
        question: "51. Nosotros ______ (aprender) mucho en clase.",
        answers: [
            { text: "a) aprendemos", correct: true },
            { text: "b) aprende", correct: false },
            { text: "c) aprendo", correct: false }
        ]
    },
    {
        question: "52. ¿Tú ______ (vivir) en el centro?",
        answers: [
            { text: "a) vive", correct: false },
            { text: "b) vives", correct: true },
            { text: "c) vivís", correct: false }
        ]
    },
    {
        question: "53. Vosotras ______ (correr) todas las tardes.",
        answers: [
            { text: "a) corres", correct: false },
            { text: "b) corréis", correct: true },
            { text: "c) corren", correct: false }
        ]
    },
    {
        question: "54. Ella ______ (hablar) italiano y francés.",
        answers: [
            { text: "a) habla", correct: true },
            { text: "b) hablo", correct: false },
            { text: "c) hablan", correct: false }
        ]
    },
    {
        question: "55. Yo ______ (desayunar) temprano los domingos.",
        answers: [
            { text: "a) desayuno", correct: true },
            { text: "b) desayunas", correct: false },
            { text: "c) desayuna", correct: false }
        ]
    },
    {
        question: "56. ¿Vosotros ______ (escribir) con frecuencia?",
        answers: [
            { text: "a) escribimos", correct: false },
            { text: "b) escribís", correct: true },
            { text: "c) escriben", correct: false }
        ]
    },
    {
        question: "57. Ellas ______ (visitar) con sus abuelos cada semana.",
        answers: [
            { text: "a) visitan", correct: true },
            { text: "b) visita", correct: false },
            { text: "c) visito", correct: false }
        ]
    },
    {
        question: "58. Tú ______ (leer) muy rápido.",
        answers: [
            { text: "a) lees", correct: true },
            { text: "b) lee", correct: false },
            { text: "c) leo", correct: false }
        ]
    }
]; 