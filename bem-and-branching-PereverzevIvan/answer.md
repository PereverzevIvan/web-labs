# Изучение методологии БЭМ
## Задание №1 - Человеческое тело
### .голова
+ голова__глаз
    - голова__глаз голова__глаз--цвет_зеленый
+ голова__ухо
    - голова__ухо голова__ухо--размер_большой
+ голова__нос
    - голова__нос голова__нос--состояние_забитый

### .нога
+ .нога__бедро
+ .нога__голень
+ .нога__ступня

### .рука
+ .рука__предплечье
+ .рука__запястье
+ .рука__палец
---
## Задание №2 - БЭМ по макету (5 вариант)
---
### Header
![header](/header.png)
```
header.header>div.container>(a.header__logo>img)+(nav.header__nav>a.header__link*5)+button.btn.header__button
```

### Форма
![form](/form.png)
```
form.form>(label.form__label.form__label--hidden+input.form__input)*2+(div.separator>label.form__label.form__label--size_small.form__label--hidden+input.form__input.form__input--size_small)*2+label.form__label.form__label--hidden+textarea.form__input.form__textarea+button.btn.btn--color_black
```

### Карточка
![card](/card.png)
```
ul.posts-cards>(li.card>a.card__link>img.card__image+p.common-text.common-text--size_medium.common-text--color_black+p.common-text.common-text--color_light-gray)*3
```

### Свой элемент
![custom element](/custom.png)
```
footer.footer>.container>(.footer__head>(a.footer__logo>img)ul.footer__nav>li.footer__link*5)+(.footer__contacts>a.footer__link+.footer__social-networks>a.social-network)+p.common-text.common-text--color_light-gray+.footer__underline-text>a.footer__last-link*2
```