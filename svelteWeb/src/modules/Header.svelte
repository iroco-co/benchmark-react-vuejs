<header>
    <div class="search">
        <input aria-label="search" type="text" placeholder="Recherche ..."/>
    </div>
</header>

<style lang="scss">
  header {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-bottom: solid $light-grey 1px;

    > .search {
      @include container-small();

      > input {
        width: 100%;
        padding: 15px 20px;
        border: solid $light-grey 1px;
        border-radius: 5px;
        background: $light-grey;
        font-size: 1.1em;
        transition: border linear 100ms, background linear 100ms;

        &:focus {
          background: white;
          border: solid $light-grey 1px;
          outline: none;
        }

      }
    }
  }
</style>
