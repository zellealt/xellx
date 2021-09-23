import make_request from "@/lib/make_request";
import Loader from "@/modules/Layout/Loader";
import NewSnackbar from "@/modules/Layout/XellxSnackbar";
import React from "react";

const ComponentDidUpdate = async (
  prevProps: any,
  prevState: any,
  that: any
) => {
  if (that.state.triggerUpdate === false) {
    return that.setState({
      triggerUpdate: true,
    });
  }
  if (prevState.selected !== that.state.selected) {
    const { session, loading } = that.props;

    const removed = prevState.selected.filter(
      (x: any) => !that.state.selected.includes(x)
    );

    const added = that.state.selected.filter(
      (x: any) => !prevState.selected.includes(x)
    );

    let api;
    let role_id;

    if (removed.length !== 0) {
      api = "remove";
      role_id = removed[0].id;
    }
    if (added.length !== 0) {
      api = "add";
      role_id = added[0].id;
    }

    that.setState({
      snackbar: <Loader />,
    });

    const jsonRes = await make_request(
      `${process.env.NEXT_PUBLIC_APP_URI}/api/${that.props.guild.id}/${api}/sticky_role?data=${role_id}`,
      {
        Authorization: session.user.accessToken,
      }
    );
    if (jsonRes.status === "error") {
      that.setState({
        selected: prevState.selected,
        triggerUpdate: false,
        snackbar: (
          <NewSnackbar message={jsonRes.message} status={jsonRes.status} />
        ),
      });
    }

    that.setState({
      snackbar: (
        <NewSnackbar message={jsonRes.message} status={jsonRes.status} />
      ),
    });
  }
};

export default ComponentDidUpdate;
