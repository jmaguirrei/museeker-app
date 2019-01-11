

export const Menu = ui => {

  const size = 28;

  return ui.hoc({

    state(props, store) {
      return {
        position: store.get('menu.position'),
        level: store.get('menu.level'),
      };
    },

    actions(props, store) {
      return {
        onClick: () => {
          const level = store.get('menu.level');
          const position = store.get('menu.position');
          if (level === 0) {
            store.set({
              'menu.position': -position,
              currentPage: position === 1 ? 'app' : 'dash',
            });
          } else {
            store.set({
              'menu.level': level - 1,
              'dash.submenu': '',
            });
          }
        },
      };
    },

    classes: {
      wrapper: `
        position: relative;
        width: ${size}px;
        height: ${size}px;
        display: flex;
        flex-flow: column;
        justify-content: center;
      `,
      line: `
        position: absolute;
        width: 100%;
        height: 20%;
        transform: scale(1, 1);
        background: hsla(0, 0%, 50%, 1);
        border-radius: ${size}px;
        transition: all .6s ease;
        transform-origin: 10% 50%;
      `,
    },

    styles: {
      handle: (position, level) => `
        position: absolute;
        width: 58%;
        height: 58%;
        background: hsl(0, 0%, 98%);
        border-radius: 50%;
        z-index: 10;
        transform:
          scale(${level > 0 ? 0 : 1.1})
          translate3d(${position === -1 ? -20 : 80}%, 0, 0);
        transition: all .35s ease;
        box-shadow: inset 0px 0px 6px hsla(0, 0%, 0%, 0.6);
      `,
      topLine: level => `
        transform:
          rotateZ(${level > 0 ? -44 : 0}deg)
          scale(${level > 0 ? 0.7 : 1}, 1);
      `,
      bottomLine: level => `
        transform:
          rotateZ(${level > 0 ? 44 : 0}deg)
          scale(${level > 0 ? 0.7 : 1}, 1);
      `,
    },

    render({ actions, state, classes, styles }) {

      const { position, level } = state;

      return ui.html`
        <div class=${classes.wrapper} @click=${actions.onClick}>
          <div style=${styles.handle(position, level)}></div>
          <div class=${classes.line} style=${styles.topLine(level)}></div>
          <div class=${classes.line} style=${styles.bottomLine(level)}></div>
        </div>
      `;
    }

  });

};
